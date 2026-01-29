import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Button from '../Button';

interface CalendarModalProps {
  onClose: () => void;
}

export default function CalendarModal({ onClose }: CalendarModalProps) {
  return (
    <View className="flex-1 ">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1" />
      </TouchableWithoutFeedback>

      <View className="flex-2 bg-white rounded-t-2xl">
        <View className="px-4">
          <Button type="primary" onPress={onClose}>
            Filtrar
          </Button>
        </View>
      </View>
    </View>
  );
}
