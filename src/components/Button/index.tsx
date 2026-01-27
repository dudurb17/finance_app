import React from 'react';
import { ActivityIndicator, Pressable, PressableProps, Text } from 'react-native';
import { button } from './styles';
interface ButtonProps extends PressableProps {
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
    <Pressable className={button({ type, size })} {...rest}>
      <Text className="text-white">
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
        {!isLoading && children}
      </Text>
    </Pressable>
  );
}
