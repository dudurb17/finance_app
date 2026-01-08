import Container from '@/components/Container';
import { Background, Logo, AreaInput, Input, SignInContent } from './styles';
import { Animated, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useBottomSheet } from '@/components/BottomSheetProvider';

export default function SignIn() {
  const { open } = useBottomSheet();

  const handleOpenBottomSheet = () => {
    open(<Text>Teste de modal</Text>, ['25%', '50%']);
  };
  return (
    <Container backgroundColor="#f0f4ff">
      <SignInContent>
        <Logo source={require('@/assets/images/Logo.png')} />
        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>
        <Button title="Sign In" onPress={() => handleOpenBottomSheet()} />
      </SignInContent>
    </Container>
  );
}
