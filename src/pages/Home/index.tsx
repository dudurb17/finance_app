import {
  Alert,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import Container from '@/components/Container';
import api from '@/services/api';
import { format, parse } from 'date-fns';
import { Balance } from '@/types/balance';
import BalanceItem from '@/components/BalanceItem';
import { useFocusEffect } from '@react-navigation/native';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { Movements } from '@/types/movements';
import MovementItem from '@/components/MovementItem';
import { widgetBridge } from '@/services/widgetBridge';
import CalendarModal from '@/components/CalendarModal';

export default function Home() {
  const [listBalences, setListBalences] = useState<Balance[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [movements, setMovements] = useState<Movements[]>([]);
  const [showModal, setShowModal] = useState(false);
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function getListBalences() {
        try {
          let date = format(dateMovements, 'dd-MM-yyyy');

          const receives = await api.get('/receives', { params: { date } });
          console.log('receives', receives?.data);
          const response = await api.get('/balance', { params: { date } });
          if (isActive) {
            setMovements(receives?.data);
            setListBalences(response?.data);
            const saldoItem = response?.data?.find(
              (b: Balance) => b.tag === 'saldo',
            );
            if (saldoItem != null) {
              widgetBridge.setBalance(saldoItem.saldo).catch(() => {});
            }
          }
        } catch (error) {
          console.error('error', error);
        }
      }

      getListBalences();

      return () => {
        isActive = false;
      };
    }, [dateMovements]),
  );

  const askDeleteMovement = async (id: string) => {
    Alert.alert(
      'Deletar movimentação',
      'Tem certeza que deseja deletar esta movimentação?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => {
            deleteMovement(id);
          },
        },
      ],
    );
  };

  const deleteMovement = async (id: string) => {
    try {
      await api.delete(`/receives/delete`, {
        params: { item_id: id },
      });
      setDateMovements(new Date());
    } catch (error) {
      console.error('error', error);
    }
  };

  const filterDate = (dateString: string) => {
    setShowModal(false);
    setDateMovements(parse(dateString, 'yyyy-MM-dd', new Date()));
  };

  return (
    <Container
      removedPaddingX
      titleHeader="Home"
      showModal={showModal}
      onCloseModal={() => setShowModal(false)}
      childrenModal={
        <CalendarModal
          onClose={() => setShowModal(false)}
          handleFilterDate={filterDate}
        />
      }
    >
      <View className="h-35 px-4">
        <FlatList
          data={listBalences}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15 }}
          keyExtractor={(___, index) => index.toString()}
          renderItem={({ item }) => <BalanceItem balance={item} />}
        />
      </View>
      <View className=" bg-white/80 flex-1 rounded-t-2xl mt-5">
        <View className="px-4">
          <TouchableOpacity
            className="flex-row gap-3 items-center mt-3"
            onPress={() => setShowModal(true)}
          >
            <FontAwesome name="calendar" size={24} color="black" />
            <Text className="text-lg font-bold">Últimas movimentações</Text>
          </TouchableOpacity>
          <FlatList
            data={movements}
            contentContainerStyle={{ gap: 10 }}
            className="mt-3 mb-10"
            showsVerticalScrollIndicator={false}
            keyExtractor={(___, index) => index.toString()}
            renderItem={({ item }) => (
              <MovementItem movement={item} onDelete={askDeleteMovement} />
            )}
          />
        </View>
      </View>
    </Container>
  );
}
