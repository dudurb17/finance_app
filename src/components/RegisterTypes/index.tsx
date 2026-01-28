import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { cn } from 'tailwind-variants';

interface RegisterTypesProps {
  value: 'receita' | 'despesa';
  onChange: (value: 'receita' | 'despesa') => void;
}

export default function RegisterTypes({ value, onChange }: RegisterTypesProps) {
  const isIncome = value === 'receita';
  const isExpense = value === 'despesa';

  return (
    <View className="flex-row gap-3">
      <TouchableOpacity
        onPress={() => onChange('receita')}
        className={cn(
          'flex-1 flex-row items-center justify-center gap-2 rounded-lg border p-3',
          isIncome && 'bg-green-100 border-green-500',
          !isIncome && 'bg-white border-gray-300',
        )}
      >
        <FontAwesome
          name="arrow-up"
          size={18}
          color={isIncome ? '#16a34a' : '#6b7280'}
        />
        <Text
          className={cn(
            'font-semibold',
            isIncome ? 'text-green-700' : 'text-gray-600',
          )}
        >
          Receita
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChange('despesa')}
        className={cn(
          'flex-1 flex-row items-center justify-center gap-2 rounded-lg border p-3',
          isExpense && 'bg-red-100 border-red-500',
          !isExpense && 'bg-white border-gray-300',
        )}
      >
        <FontAwesome
          name="arrow-down"
          size={18}
          color={isExpense ? '#dc2626' : '#6b7280'}
        />
        <Text
          className={cn(
            'font-semibold',
            isExpense ? 'text-red-700' : 'text-gray-600',
          )}
        >
          Despesa
        </Text>
      </TouchableOpacity>
    </View>
  );
}
