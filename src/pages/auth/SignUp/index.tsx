import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { SignUpContent } from './styles';
import { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { PublicRoutesNavigationProp } from '@/routes/public/types';
import { UserData } from '@/types/user';

export default function SignUp() {
  const { signUp } = useAuth();
  const navigation = useNavigation<PublicRoutesNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserData>({
    name: '',
    email: '',
    password: '',
  });

  async function handleSignUp() {
    if (user.name === '' || user.email === '' || user.password === '') return;
    setIsLoading(true);
    await signUp(user);
    navigation.goBack();
    setIsLoading(false);
  }

  return (
    <Container removedPaddingTop={true}>
      <SignUpContent>
        <Input
          value={user?.name}
          onChangeText={text => setUser({ ...user, name: text })}
          placeholder="Nome"
        />

        <Input
          value={user?.email}
          onChangeText={text => setUser({ ...user, email: text })}
          placeholder="Seu email"
        />

        <Input
          value={user?.password}
          onChangeText={text => setUser({ ...user, password: text })}
          placeholder="Sua senha"
          isPassword
        />

        <Button onPress={handleSignUp} isLoading={isLoading}>
          Cadastrar
        </Button>
      </SignUpContent>
    </Container>
  );
}
