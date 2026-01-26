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
  backgroundColor,
  removedPaddingTop = false,
}: ContainerProps) {
  const inset = useSafeAreaInsets();

  return (
    <View
      className={`flex-1 p-4 bg-gray-100 ${removedPaddingTop ? 'pt-0' : `pt-${inset.top}px`} ${backgroundColor ? `bg-${backgroundColor}` : 'bg-gray-100'}`}
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
