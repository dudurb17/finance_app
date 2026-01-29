import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { PrivateRoutesParams } from '@/routes/private/types';

type Props = {
  title?: string;
};

export default function HeaderScreenDrawer({ title }: Props) {
  const navigation = useNavigation<DrawerNavigationProp<PrivateRoutesParams>>();

  return (
    <View className="bg-blue-800 px-4 pb-4 rounded-b-2xl mb-5">
      <View className="flex-row items-center gap-3 pt-safe">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome name="bars" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text
          className="text-2xl font-bold text-white flex-1"
          numberOfLines={1}
        >
          {title ?? 'Finance App'}
        </Text>
      </View>
    </View>
  );
}
