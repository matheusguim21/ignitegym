import { Box, Text, VStack } from "native-base";
import LogoSocinpro from '@assets/logos/logosemnome.png'
import { Image } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import dayjs  from "dayjs";
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import MonthPicker from "react-native-month-year-picker";

export function Demonstrativos(){

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (event: any, newDate: Date) => {
    if (event !== undefined) {
      setSelectedDate(dayjs(newDate));
    }
    hideDatePicker();
  };

  return (
    <VStack flex={1} paddingY={10}>
      <Box backgroundColor={'gray.600'}>
        <Image 
          source={LogoSocinpro}
          width={40}
          height={32}
          alignSelf={'center'}
          alt="LogoSocinpro"
        />
        <ScreenHeader title="Extrato SOCINPRO"/>
      </Box>
      <Box justifyContent={'center'} alignItems={'center'}>
        <Text
          color={'gray.100'}
          fontSize={"md"}
          fontWeight={'bold'}
          fontFamily={'heading'}
        >
          Selecione o mês
        </Text>
        <TouchableOpacity
          onPress={showDatePicker}
          style={{
            backgroundColor:'#15b94c',
            borderRadius:2
          }}
        >
          <Text
            color={'gray.100'}
            backgroundColor={'green.600'}
            fontSize={'lg'}
            textAlign={'center'}
            width={32}
          >
            {selectedDate.format('MM/YY')}
          </Text>
        </TouchableOpacity>
        {isDatePickerVisible && (
          <MonthPicker
            onChange={handleConfirm}
            value={selectedDate.toDate()}
            minimumDate={new Date(2000, 0)} // Definindo uma data mínima (opcional)
            maximumDate={new Date()} // Definindo uma data máxima (opcional)
            locale="pt" // Definindo o idioma (opcional)
          />
        )}
      </Box>
    </VStack>
  );
}
