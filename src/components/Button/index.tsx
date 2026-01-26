import React from 'react';
import { ActivityIndicator, Pressable, PressableProps } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { button, text } from './styles';
interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  isLoading?: boolean;
  type?: 'primary' | 'secondary' | 'danger';
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
      <Text className={text({ size })}>
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
        {!isLoading && children}
      </Text>
    </Pressable>
  );
}
