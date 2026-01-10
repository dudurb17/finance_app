import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Logo, SignInContent, Link, LinkText } from './styles';
import { Text } from 'react-native';

import { useBottomSheet } from '@/contexts/bottomSheet';
import { PublicRoutesNavigationProp } from '@/routes/public/types';
import { useNavigation } from '@react-navigation/native';
import { UserData } from '@/types/user';
import { useState } from 'react';
import { useAuth } from '@/contexts/auth';

export default function SignIn() {
  const { signIn } = useAuth();
  const navigation = useNavigation<PublicRoutesNavigationProp>();
  const [user, setUser] = useState<UserData>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  async function handleSignIn() {
    if (user.email === '' || user.password === '') return;
    setIsLoading(true);
    await signIn(user);
    setIsLoading(false);
  }

  return (
    <Container backgroundColor="#f0f4ff">
      <SignInContent>
        <Logo source={require('@/assets/images/Logo.png')} />
        <Input
          value={user?.email}
          onChangeText={text => setUser({ ...user, email: text })}
          placeholder="Email"
        />
        <Input
          value={user?.password}
          onChangeText={text => setUser({ ...user, password: text })}
          placeholder="Password"
          isPassword
        />
        <Button onPress={handleSignIn} isLoading={isLoading}>
          Entrar
        </Button>

        <Link>
          <LinkText onPress={() => navigation.navigate('SignUp')}>
            Criar conta
          </LinkText>
        </Link>
      </SignInContent>
    </Container>
  );
}
