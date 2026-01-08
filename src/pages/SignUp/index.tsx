import Container from '@/components/Container';
import { Text } from 'react-native';
import {
  AreaInput,
  Input,
  SignUpContent,
  SubmitButton,
  SubmitText,
} from './styles';

export default function SignUp() {
  return (
    <Container removedPaddingTop={true}>
      <SignUpContent>
        <AreaInput>
          <Input placeholder="Nome" placeholderTextColor="#CCCCCC" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu email" placeholderTextColor="#CCCCCC" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" placeholderTextColor="#CCCCCC" />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Confirme sua senha"
            placeholderTextColor="#CCCCCC"
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </SignUpContent>
    </Container>
  );
}
