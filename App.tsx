import './src/global.css';
import {
  SafeAreaListener,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from '@/contexts/bottomSheet';
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
            <Container>
              <StatusBar barStyle="dark-content" />
              <Routes />
            </Container>
          </AuthProvider>
        </SafeAreaListener>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default App;
