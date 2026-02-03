import './src/global.css';
import {
  SafeAreaListener,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Routes from './src/routes';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '@/contexts/auth';
import { Uniwind } from 'uniwind';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaListener
          onChange={({ insets }) => {
            Uniwind.updateInsets(insets);
          }}
        >
          <AuthProvider>
            <View className="flex-1">
              <StatusBar barStyle="dark-content" />
              <Routes />
            </View>
          </AuthProvider>
        </SafeAreaListener>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
