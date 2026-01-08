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
  removedPaddingTop?: boolean;
}

export default function Container({
  children,
  backgroundColor,
  removedPaddingTop = false,
}: ContainerProps) {
  const inset = useSafeAreaInsets();
  return (
    <ContainerStyled backgroundColor={backgroundColor}>
      <View
        style={{
          flex: 1,
          paddingTop: removedPaddingTop ? 0 : inset.top,
          paddingBottom: inset.bottom,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          enabled
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </ContainerStyled>
  );
}
