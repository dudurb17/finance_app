import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import { useAuth } from '@/contexts/auth';
import Button from '@/components/Button';
import api from '@/services/api';
import { format } from 'date-fns';
import { Balance } from '@/types/balance';
import BalanceItem from '@/components/BalanceItem';

export default function Home() {
  const { signOut } = useAuth();
  const [listBalences, setListBalences] = useState<Balance[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getListBalences() {
      try {
        let date = format(dateMovements, 'yyyy-MM-dd');
        const response = await api.get('/balance', { params: { date } });
        if (isActive) {
          console.log('response', response?.data);
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
    <Container>
      <Text>Home</Text>
      <View className="h-35">
      <FlatList
        data={listBalences}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
        keyExtractor={(___, index) => index.toString()}
        renderItem={({ item }) => <BalanceItem balance={item} />}
      />
      </View>
      <Button onPress={() => signOut()}>Sair</Button>
    </Container>
  );
}
