import { View, Text } from 'react-native';
import React from 'react';
import Container from '@/components/Container';
import { useAuth } from '@/contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { PrivateRoutesNavigationProp } from '@/routes/private/types';
import Button from '@/components/Button';
import FontAwesome from '@react-native-vector-icons/fontawesome';

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<PrivateRoutesNavigationProp>();
  return (
    <Container>
      <View className="flex-1 pt-8">
        <View className="bg-white rounded-2xl shadow-sm p-6 items-center mb-6">
          <View className="w-20 h-20 rounded-full bg-blue-100 items-center justify-center mb-4">
            <FontAwesome name="user" size={36} color="#3B82F6" />
          </View>
          <Text className="text-base text-gray-500 mb-1">
            Bem-vindo(a) ao Finance App
          </Text>
          <Text className="text-2xl font-bold text-gray-900">
            Olá, {user?.name ?? 'usuário'}!
          </Text>
        </View>

        <View>
          <Button
            type="primary"
            onPress={() => navigation.navigate('NewRegistration')}
          >
            Fazer registro
          </Button>
          <Button type="danger" onPress={() => signOut()}>
            Sair
          </Button>
        </View>
      </View>
    </Container>
  );
}
