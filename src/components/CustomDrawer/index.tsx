import { Image, Text, View } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useAuth } from '@/contexts/auth';
import Button from '@/components/Button';
import FontAwesome from '@react-native-vector-icons/fontawesome';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const { user, signOut } = useAuth();

  return (
    <View className="flex-1 bg-gray-100">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <View className="px-4 pt-safe pb-6 bg-blue-800 rounded-b-3xl">
          <View className="flex-row items-center justify-between">
            <Image
              source={require('@/assets/images/Logo.png')}
              style={{ width: 44, height: 44 }}
              resizeMode="contain"
            />
            <View className="w-11 h-11 rounded-full bg-white/20 items-center justify-center">
              <FontAwesome name="user" size={20} color="#FFFFFF" />
            </View>
          </View>

          <Text className="text-white/80 mt-5 text-sm">Bem-vindo(a),</Text>
          <Text className="text-white text-2xl font-bold" numberOfLines={1}>
            {user?.name ?? 'Usuário'}
          </Text>
          <Text className="text-white/70 mt-1 text-sm" numberOfLines={1}>
            {user?.email ?? ''}
          </Text>
        </View>

        <View className="px-3 mt-4">
          <Text className="text-xs text-gray-500 font-semibold px-2 mb-2">
            MENU
          </Text>
          <View className="bg-white rounded-2xl p-2">
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>

      <View className="px-4 pb-safe pt-3">
        <Button type="danger" onPress={() => signOut()}>
          Sair
        </Button>
      </View>
    </View>
  );
}
