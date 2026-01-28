import React, { useRef, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import { HexColor } from '@/types/color';

interface InputProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  placeholder?: string;
  placeholderTextColor?: HexColor;
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
    <View className="flex-row mb-5">
      <TouchableOpacity
        className="bg-white flex-1 rounded-lg flex-row"
        onPress={() => inputRef.current?.focus()}
      >
        <TextInput
          ref={inputRef}
          className="p-2.5 flex-1 rounded-lg text-gray-900"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPassword && !isPasswordVisible}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity
            className="items-center justify-center px-2.5"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <FontAwesome name="eye" size={24} color="black" />
            ) : (
              <FontAwesome name="eye-slash" size={24} color="black" />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}
