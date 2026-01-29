import { View, Text, Keyboard, Alert } from 'react-native';
import React, { useState } from 'react';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import RegisterTypes from '@/components/RegisterTypes';
import api from '@/services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function NewRegistration() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState<string>('');
  const [registerType, setRegisterType] = useState<'receita' | 'despesa'>(
    'receita',
  );
  const navigation = useNavigation();
  function handleRegister() {
    Keyboard.dismiss();
    if (description === '' || value === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }
    Alert.alert('Confirmando dados', `Tipo: ${registerType}\nValor: ${value}`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => {
          confirmData();
        },
      },
    ]);
  }

  const confirmData = async () => {
    Keyboard.dismiss();
    try {
      const response = await api.post('/receive', {
        description,
        value: Number(value),
        type: registerType,
        date: format(new Date(), 'dd-MM-yyyy'),
      });
      if (response?.status === 200) {
        setDescription('');
        setValue('');
        setRegisterType('receita');
        navigation.goBack();
      } else {
        Alert.alert('Erro ao realizar registro');
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <Container titleHeader="Novo registro">
      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        placeholder="Valor"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />
      <RegisterTypes value={registerType} onChange={setRegisterType} />
      <Button onPress={handleRegister}>Registrar</Button>
    </Container>
  );
}
