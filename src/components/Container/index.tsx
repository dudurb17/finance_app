import { KeyboardAvoidingView, Platform, View } from 'react-native';
import React from 'react';
import { cn } from 'tailwind-variants';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  paddingTop?: boolean;
}

export default function Container({
  children,
  backgroundColor = 'bg-gray-100',
  paddingTop = false,
}: ContainerProps) {
  return (
    <View
     className={cn('flex-1', backgroundColor, 'px-4', 'pb-safe', { 'pt-safe': paddingTop })}
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
