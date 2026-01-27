import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Image, Text, TouchableOpacity, View } from 'react-native';

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
      <View className="flex-1 justify-center items-center">
        <Image className="mb-5" source={require('@/assets/images/Logo.png')} />
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
        <Button type="primary" onPress={handleSignIn} isLoading={isLoading}>
          Entrar
        </Button>
        <TouchableOpacity className="mt-3">
          <Text className="text-17px text-gray-800 font-semibold" onPress={() => navigation.navigate('SignUp')}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
