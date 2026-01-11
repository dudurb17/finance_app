import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import { useAuth } from '@/contexts/auth';
import Button from '@/components/Button';
import api from '@/services/api';
import { format } from 'date-fns';

export default function Home() {
  const { signOut } = useAuth();
  const [listBalences, setListBalences] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getListBalences() {
      try {
        let date = format(dateMovements, 'yyyy-MM-dd');
        const response = await api.get('/balance', { params: { date } });
        if (isActive) {
          setListBalences(response?.data);
        }
        console.log('response', response?.data);
      } catch (error) {
        console.error('error', error);
      }
    }

    getListBalences();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <Container removedPaddingTop>
      <Text>Home</Text>
      <Button onPress={() => signOut()}>Sair</Button>
    </Container>
  );
}
