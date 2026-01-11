import { Text } from 'react-native';
import React from 'react';
import Container from '@/components/Container';
import { useAuth } from '@/contexts/auth';
import Button from '@/components/Button';

export default function Home() {
  const { signOut } = useAuth();
  return (
    <Container removedPaddingTop>
      <Text>Home</Text>
      <Button onPress={() => signOut()}>Sair</Button>
    </Container>
  );
}
