package com.finance_app

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.finance_app.widget.BalanceWidgetProvider
import com.finance_app.widget.WidgetPrefs

class WidgetBridgeModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "WidgetBridge"

    @ReactMethod
    fun setBalance(balance: Double, promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences(WidgetPrefs.PREFS_NAME, android.content.Context.MODE_PRIVATE)
            prefs.edit().putFloat(WidgetPrefs.KEY_BALANCE, balance.toFloat()).apply()
            BalanceWidgetProvider.updateAllWidgets(reactApplicationContext)
            promise.resolve(null)
        } catch (e: Exception) {
            promise.reject("WIDGET_ERROR", e.message)
        }
    }

    @ReactMethod
    fun setCredentials(apiUrl: String, token: String, promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences(WidgetPrefs.PREFS_NAME, android.content.Context.MODE_PRIVATE)
            prefs.edit()
                .putString(WidgetPrefs.KEY_API_URL, apiUrl.trim().removeSuffix("/"))
                .putString(WidgetPrefs.KEY_TOKEN, token)
                .apply()
            promise.resolve(null)
        } catch (e: Exception) {
            promise.reject("WIDGET_ERROR", e.message)
        }
    }
}
