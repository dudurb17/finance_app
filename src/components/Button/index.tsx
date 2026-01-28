import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { button } from './styles';
interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  isLoading?: boolean;
  type?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  type,
  size,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity className={button({ type, size })} {...rest}>
      <Text className="text-white">
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
        {!isLoading && children}
      </Text>
    </TouchableOpacity>
  );
}
