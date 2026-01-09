import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { ContainerView } from './styles';
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
    <ContainerView
      removedPaddingTop={removedPaddingTop}
      backgroundColor={backgroundColor}
      inset={inset}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled
      >
        {children}
      </KeyboardAvoidingView>
    </ContainerView>
  );
}
