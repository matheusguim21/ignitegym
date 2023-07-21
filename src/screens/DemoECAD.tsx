import { Box, Text, VStack } from "native-base";
import LogoSocinpro from '@assets/logos/logosemnome.png'
import { Image } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import dayjs  from "dayjs";
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

import LogoECAD from '@assets/logos/logo-ecad-home.svg'

import MonthPicker from "react-native-month-year-picker";

export function DemoECAD(){

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
    <VStack 
    flex={1} 
    paddingY={10}
    justifyContent={"flex-start"}
    >
      <Box 
      backgroundColor={'gray.600'}
      justifyContent={'center'}
      alignItems={'center'}
      >
        <LogoECAD
        width={'100px'}
        height={'100px'}
        style={{
          marginBottom:-10,
          marginTop:20
        }}
        
        />
        <ScreenHeader 
        
        title="Extrato ECAD"/>
      </Box>


        

     
        <VStack
        alignSelf={'center'}
        alignItems={'center'}
        width={"90%"}
        height={'60%'}
        marginTop={10}
        paddingY={5}
        // borderColor={'red.500'}
        // borderWidth={2}
        >
          <Box
          backgroundColor={"gray.600"}
          width={"full"}
          height={'80%'}
          borderRadius={8}
          >
              
              <VStack
              justifyContent={'space-evenly'}
              alignItems={'center'}
              paddingX={10}
              >
                <Text
                  color={'gray.100'}
                  fontSize={"md"}
                  fontWeight={'bold'}
                  fontFamily={'heading'}
                >
                  Selecione o mês
                </Text>
                
  
                
                {isDatePickerVisible && (
                  <MonthPicker
                    onChange={handleConfirm}
                    value={selectedDate.toDate()}
                    minimumDate={new Date(2000, 0)} // Definindo uma data mínima (opcional)
                    maximumDate={new Date()} // Definindo uma data máxima (opcional)
                    locale="pt" // Definindo o idioma (opcional)
                  />
                )}
              
                
              </VStack>
              
          </Box>
        
       </VStack>
    
    </VStack>

    
  );
}
