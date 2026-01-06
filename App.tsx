import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { useStatusBarColorStyle } from '@/store/theme/store';

function App() {
  const statusBarColorStyle = useStatusBarColorStyle();

  return (
    <SafeAreaProvider>
      <Container statusBarColorStyle={statusBarColorStyle}>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </Container>
    </SafeAreaProvider>
  );
}

const Container = styled.View<{ statusBarColorStyle: string }>`
  flex: 1;
  background-color: ${({ statusBarColorStyle }) => statusBarColorStyle};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default App;
