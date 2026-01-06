import Container from '@/components/Container';
import { Background, Logo, AreaInput, Input, SignInContent } from './styles';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <Container backgroundColor="#f0f4ff">
      <SignInContent>
        <Logo source={require('@/assets/images/Logo.png')} />
        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>

        <Button title="Sign In" onPress={() => navigation.navigate('SignUp')} />
      </SignInContent>
    </Container>
  );
}
