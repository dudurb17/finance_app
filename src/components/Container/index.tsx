import { KeyboardAvoidingView, Platform, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  removedPaddingTop?: boolean;
}

export default function Container({
  children,
  backgroundColor = 'bg-gray-100',
  removedPaddingTop,
}: ContainerProps) {
  return (
    <View
      className={`flex-1 ${backgroundColor} px-4 pb-safe ${removedPaddingTop ? '' : 'pt-safe'}`}
    >
       <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled
      >
      {children}
      </KeyboardAvoidingView>
    </View>
  );
}
