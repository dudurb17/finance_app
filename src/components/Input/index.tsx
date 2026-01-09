import React, { useRef, useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import {
  AreaInput,
  InputContainer,
  InputStyled,
  PasswordButton,
} from './styles';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
interface InputProps extends TextInputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  isPassword?: boolean;
}

export default function Input({
  placeholder,
  placeholderTextColor = '#CCCCCC',
  isPassword = false,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <AreaInput>
      <InputContainer onPress={() => inputRef.current?.focus()}>
        <InputStyled
          // @ts-ignore
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPassword && !isPasswordVisible}
          {...rest}
        />
        {isPassword && (
          <PasswordButton
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <FontAwesome name="eye" size={24} color="black" />
            ) : (
              <FontAwesome name="eye-slash" size={24} color="black" />
            )}
          </PasswordButton>
        )}
      </InputContainer>
    </AreaInput>
  );
}
