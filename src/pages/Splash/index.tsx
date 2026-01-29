import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Container from '@/components/Container';
import { LoadingText, Logo, SplashContent } from './styles';

export default function Splash() {
  return (
    <View className="flex-1 items-center justify-center">
      <SplashContent>
        <Logo source={require('@/assets/images/Logo.png')} />
        <ActivityIndicator size="large" color="#3b3bdf" />
        <LoadingText>Carregando...</LoadingText>
      </SplashContent>
    </View>
  );
}
