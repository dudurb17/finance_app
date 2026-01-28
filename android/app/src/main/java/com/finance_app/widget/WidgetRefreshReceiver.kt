package com.finance_app.widget

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build

/**
 * Recebe o clique em "Atualizar" no widget e inicia o BalanceRefreshService
 * com startForegroundService(), para funcionar mesmo com o app fechado.
 */
class WidgetRefreshReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent?) {
        if (intent?.action != ACTION_REFRESH) return
        val serviceIntent = Intent(context, BalanceRefreshService::class.java).apply {
            action = ACTION_REFRESH
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            context.startForegroundService(serviceIntent)
        } else {
            context.startService(serviceIntent)
        }
    }

    companion object {
        const val ACTION_REFRESH = "com.finance_app.widget.ACTION_REFRESH"
    }
}
