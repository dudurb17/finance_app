import { Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Balance } from '@/types/balance';

interface BalanceItemProps {
  balance: Balance;
}

export default function BalanceItem({ balance }: BalanceItemProps) {
  const labelName = useMemo(() => {
    switch (balance.tag) {
      case 'saldo':
        return {
          label: 'Saldo Atual',
          color: 'bg-blue-500',
        };
      case 'receita':
        return {
          label: 'Entradas de hoje',
          color: 'bg-green-500',
        };
      case 'despesa':
        return {
          label: 'Saídas de hoje',
          color: 'bg-red-500',
        };
    }
  }, [balance.tag]);
  return (
    <View className={`${labelName.color} p-4 rounded-lg w-60 items-start justify-center`}>
      <Text className="text-white  font-bold">{labelName?.label}</Text>
      <Text className="text-white text-xl font-semibold ">R$ {balance?.saldo?.toFixed(2).replace('.', ',')}</Text>
    </View>
  );
}