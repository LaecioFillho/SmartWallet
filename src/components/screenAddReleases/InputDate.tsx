// DatePickerComponent.tsx
import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface InputDateProps {
  propsDate: (dados: Date) => void;
};

const InputDate: React.FC<InputDateProps> = ({propsDate}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [show, setShow] = useState<boolean>(false);

  // Função para lidar com mudanças de data
  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (currentDate) {
      propsDate(currentDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.inputSelect}
        onPress={showDatepicker}>
        <Text
          style={styles.textSelect}>
            {date ? date.toDateString() : 'Selecione a data'}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  textSelect:{
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },

  inputSelect:{
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 20,
  },
});

export default InputDate;
