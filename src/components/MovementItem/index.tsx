import { View, Text } from 'react-native';
import React from 'react';
import { Movements } from '@/types/movements';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { cn } from 'tailwind-variants';

interface MovementItemProps {
  movement: Movements;
}

export default function MovementItem({ movement }: MovementItemProps) {
  return (<View className="bg-gray-200 rounded-lg p-2 justify-center">
    <View className={cn(
      "flex-row items-center justify-center w-25 gap-2 rounded-lg h-8",
      movement?.type === 'receita' ? 'bg-green-500' : 'bg-red-500',
    )}>
      <FontAwesome name={movement?.type === 'receita' ? 'arrow-up' : 'arrow-down'} size={20} color="white" />
      <Text className="text-sm font-bold text-white">{movement?.type === 'receita' ? 'Receita' : 'Despesa'}</Text>
    </View>
    <Text className="text-xl font-bold">R$ {movement?.value?.toFixed(2).replace('.', ',')}</Text></View>
  );
}