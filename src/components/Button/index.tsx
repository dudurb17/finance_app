import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ButtonStyled, ButtonText } from './styles';
interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  activeOpacity = 0.8,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyled activeOpacity={activeOpacity} {...rest}>
      <ButtonText>
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
        {!isLoading && children}
      </ButtonText>
    </ButtonStyled>
  );
}
