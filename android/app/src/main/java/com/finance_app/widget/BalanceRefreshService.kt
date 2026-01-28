package com.finance_app.widget

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.os.Build
import android.os.Handler
import android.os.IBinder
import android.os.Looper
import android.util.Log
import com.finance_app.MainActivity
import com.finance_app.R
import org.json.JSONArray
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class BalanceRefreshService : Service() {

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_REFRESH) {
            createNotificationChannel()
            val notification = buildNotification()
            startForeground(NOTIFICATION_ID, notification)
            Thread {
                try {
                    fetchAndUpdateBalance()
                } finally {
                    Handler(Looper.getMainLooper()).post {
                        stopForeground(Service.STOP_FOREGROUND_REMOVE)
                        stopSelf(startId)
                    }
                }
            }.start()
        }
        return START_NOT_STICKY
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                getString(R.string.widget_balance_label),
                NotificationManager.IMPORTANCE_LOW
            ).apply { setShowBadge(false) }
            val manager = getSystemService(NotificationManager::class.java)
            manager?.createNotificationChannel(channel)
        }
    }

    private fun buildNotification(): Notification {
        val pendingIntent = PendingIntent.getActivity(
            this,
            0,
            Intent(this, MainActivity::class.java),
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            Notification.Builder(this, CHANNEL_ID)
                .setContentTitle(getString(R.string.app_name))
                .setContentText(getString(R.string.widget_refresh_notification))
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(pendingIntent)
                .setOngoing(true)
                .build()
        } else {
            @Suppress("DEPRECATION")
            Notification.Builder(this)
                .setContentTitle(getString(R.string.app_name))
                .setContentText(getString(R.string.widget_refresh_notification))
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(pendingIntent)
                .setOngoing(true)
                .build()
        }
    }

    private fun fetchAndUpdateBalance() {
        val prefs = getSharedPreferences(WidgetPrefs.PREFS_NAME, MODE_PRIVATE)
        val apiUrl = prefs.getString(WidgetPrefs.KEY_API_URL, null)
        val token = prefs.getString(WidgetPrefs.KEY_TOKEN, null)

        if (apiUrl.isNullOrBlank() || token.isNullOrBlank()) {
            Log.w(TAG, "Widget refresh: missing API URL or token")
            BalanceWidgetProvider.updateAllWidgets(this)
            return
        }

        val dateFormat = SimpleDateFormat("dd-MM-yyyy", Locale.getDefault())
        val date = dateFormat.format(Date())
        val urlString = "$apiUrl/balance?date=$date".replace("//balance", "/balance")

        try {
            val url = URL(urlString)
            val connection = url.openConnection() as HttpURLConnection
            connection.requestMethod = "GET"
            connection.setRequestProperty("Authorization", "Bearer $token")
            connection.connectTimeout = 10000
            connection.readTimeout = 10000

            val code = connection.responseCode
            if (code != HttpURLConnection.HTTP_OK) {
                Log.e(TAG, "Widget refresh: HTTP $code")
                BalanceWidgetProvider.updateAllWidgets(this)
                return
            }

            val reader = BufferedReader(InputStreamReader(connection.inputStream))
            val response = reader.readText()
            reader.close()
            connection.disconnect()

            val balance = parseBalanceFromResponse(response)
            prefs.edit().putFloat(WidgetPrefs.KEY_BALANCE, balance.toFloat()).apply()
            BalanceWidgetProvider.updateAllWidgets(this)
        } catch (e: Exception) {
            Log.e(TAG, "Widget refresh error", e)
            BalanceWidgetProvider.updateAllWidgets(this)
        }
    }

    private fun parseBalanceFromResponse(json: String): Double {
        return try {
            val array = JSONArray(json)
            for (i in 0 until array.length()) {
                val obj = array.getJSONObject(i)
                if (obj.optString("tag") == "saldo") {
                    return obj.optDouble("saldo", 0.0)
                }
            }
            if (array.length() > 0) {
                array.getJSONObject(0).optDouble("saldo", 0.0)
            } else {
                0.0
            }
        } catch (e: Exception) {
            Log.e(TAG, "Parse balance error", e)
            0.0
        }
    }

    companion object {
        private const val TAG = "BalanceRefreshService"
        private const val CHANNEL_ID = "widget_refresh"
        private const val NOTIFICATION_ID = 1001
        private const val ACTION_REFRESH = "com.finance_app.widget.ACTION_REFRESH"
    }
}
