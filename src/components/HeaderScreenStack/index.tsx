import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@react-native-vector-icons/fontawesome';

export default function HeaderScreenStack({ title }: { title?: string }) {
  const navigation = useNavigation();
  return (
    <View className="bg-blue-300 px-4 pb-4 rounded-b-2xl">
      <View className="flex-row items-center gap-2 pt-safe ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-white">
          {title ?? 'Header'}
        </Text>
      </View>
    </View>
  );
}
