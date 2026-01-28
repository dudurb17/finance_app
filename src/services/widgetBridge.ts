import { NativeModules, Platform } from 'react-native';

const { WidgetBridge } = NativeModules;

export const widgetBridge = {
  setBalance(balance: number): Promise<void> {
    if (Platform.OS !== 'android' || !WidgetBridge) return Promise.resolve();
    return WidgetBridge.setBalance(balance);
  },
  setCredentials(apiUrl: string, token: string): Promise<void> {
    if (Platform.OS !== 'android' || !WidgetBridge) return Promise.resolve();
    return WidgetBridge.setCredentials(apiUrl, token);
  },
};
