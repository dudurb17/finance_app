import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Logo, SignInContent, Link, LinkText } from './styles';
import { Text } from 'react-native';

import { useBottomSheet } from '@/contexts/bottomSheet';
import { PublicRoutesNavigationProp } from '@/routes/public/types';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/contexts/auth';

import { API_URL } from '@env';
export default function SignIn() {
  const { open } = useBottomSheet();
  const navigation = useNavigation<PublicRoutesNavigationProp>();
  const handleOpenBottomSheet = () => {
    open(<Text>Fazendo Login...</Text>, ['25%', '50%']);
  };
  return (
    <Container backgroundColor="#f0f4ff">
      <SignInContent>
        <Logo source={require('@/assets/images/Logo.png')} />
        <Input placeholder="Email" />
        <Input placeholder="Password" isPassword />
        <Button onPress={() => handleOpenBottomSheet()}>Entrar</Button>

        <Link>
          <LinkText onPress={() => navigation.navigate('SignUp')}>
            Criar conta
          </LinkText>
        </Link>
      </SignInContent>
    </Container>
  );
}
