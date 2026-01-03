import { Text, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';


import styled from 'styled-components/native';

function App() {
  return (
    <SafeAreaProvider>
       <Container >
        <Title>Hello World</Title>
       </Container>
    </SafeAreaProvider>
  );
}

const Container = styled.View`
flex:1;
justify-content: center;
align-items: center;
background-color: #000;
`;

const Title = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff;
`;

export default App;
