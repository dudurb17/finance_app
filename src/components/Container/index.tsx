import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { ContainerStyled } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

export default function Container({
  children,
  backgroundColor,
  edges = ['top', 'bottom'],
}: ContainerProps) {
  return (
    <ContainerStyled backgroundColor={backgroundColor}>
      <SafeAreaView style={{ flex: 1 }} edges={edges}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ContainerStyled>
  );
}
