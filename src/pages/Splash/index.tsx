import React from 'react';
import { ActivityIndicator } from 'react-native';
import Container from '@/components/Container';
import { LoadingText, Logo, SplashContent } from './styles';

export default function Splash() {
  return (
    <Container>
      <SplashContent>
        <Logo source={require('@/assets/images/Logo.png')} />
        <ActivityIndicator size="large" color="#3b3bdf" />
        <LoadingText>Carregando...</LoadingText>
      </SplashContent>
    </Container>
  );
}
