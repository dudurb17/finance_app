import Container from '@/components/Container';
import {
  Background,
  Logo,
  AreaInput,
  Input,
  SignInContent,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';
import { Text } from 'react-native';

import { useBottomSheet } from '@/components/BottomSheetProvider';
import {
  PublicRoutesNavigationProp,
  PublicRoutesParams,
} from '@/routes/public/types';
import { useNavigation } from '@react-navigation/native';

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
        <AreaInput>
          <Input placeholder="Email" placeholderTextColor="#CCCCCC" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Password" placeholderTextColor="#CCCCCC" />
        </AreaInput>
        <SubmitButton
          activeOpacity={0.8}
          onPress={() => handleOpenBottomSheet()}
        >
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText onPress={() => navigation.navigate('SignUp')}>
            Criar conta
          </LinkText>
        </Link>
      </SignInContent>
    </Container>
  );
}
