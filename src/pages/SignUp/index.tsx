import Container from '@/components/Container';
import { Text } from 'react-native';
import {
  AreaInput,
  Input,
  SignUpContent,
  SubmitButton,
  SubmitText,
} from './styles';
import { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { PublicRoutesNavigationProp } from '@/routes/public/types';

export default function SignUp() {
  const { signUp } = useAuth();
  const navigation = useNavigation<PublicRoutesNavigationProp>();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  async function handleSignUp() {
    await signUp(user);
    navigation.goBack();
  }

  return (
    <Container removedPaddingTop={true}>
      <SignUpContent>
        <AreaInput>
          <Input
            value={user?.name}
            onChangeText={text => setUser({ ...user, name: text })}
            placeholder="Nome"
            placeholderTextColor="#CCCCCC"
          />
        </AreaInput>

        <AreaInput>
          <Input
            value={user?.email}
            onChangeText={text => setUser({ ...user, email: text })}
            placeholder="Seu email"
            placeholderTextColor="#CCCCCC"
          />
        </AreaInput>

        <AreaInput>
          <Input
            value={user?.password}
            onChangeText={text => setUser({ ...user, password: text })}
            placeholder="Sua senha"
            placeholderTextColor="#CCCCCC"
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </SignUpContent>
    </Container>
  );
}
