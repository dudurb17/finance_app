import { KeyboardAvoidingView, Platform, View } from 'react-native';
import React from 'react';
import { ContainerStyled } from './styles';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

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
  const inset = useSafeAreaInsets();
  return (
    <ContainerStyled backgroundColor={backgroundColor}>
      <View
        style={{ flex: 1, paddingTop: inset.top, paddingBottom: inset.bottom }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </ContainerStyled>
  );
}
