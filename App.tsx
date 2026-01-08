import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from '@/components/BottomSheetProvider';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetProvider>
          <Container>
            <StatusBar barStyle="dark-content" />
            <Routes />
          </Container>
        </BottomSheetProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const Container = styled.View`
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default App;
