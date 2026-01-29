import { View, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import Button from '../Button';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { ptBr } from './localeCalendar';

interface CalendarModalProps {
  onClose: () => void;
  handleFilterDate: (dateString: string) => void;
}
LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({
  onClose,
  handleFilterDate,
}: CalendarModalProps) {
  const [dataNow, setDataNow] = useState<Date>(new Date());
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day: DateData) => {
    const date = new Date(day.dateString);
    setDataNow(date);
    setMarkedDates({
      [day.dateString]: {
        selected: true,
        selectedColor: 'red',
        selectedTextColor: 'white',
      },
    });
  };

  return (
    <View className="flex-1 ">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1" />
      </TouchableWithoutFeedback>

      <View className="flex-2 bg-white rounded-t-2xl">
        <View className="px-4">
          <Calendar
            onDayPress={handleDayPress}
            markedDates={markedDates}
            enableSwipeMonths={true}
            theme={{
              calendarBackground: 'white',
              todayTextColor: 'blue',
            }}
          />
          <Button
            type="primary"
            onPress={() => handleFilterDate(dataNow.toISOString().slice(0, 10))}
          >
            Filtrar
          </Button>
        </View>
      </View>
    </View>
  );
}
