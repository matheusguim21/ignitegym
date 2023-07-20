import { Box, Button, HStack, Input, Text, VStack } from "native-base";
import LogoSocinpro from '@assets/logos/logosemnome.png'
import { Image } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import dayjs  from "dayjs";
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function Demonstrativos(){

  
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:Date) => {
    setSelectedDate(dayjs(date))
    hideDatePicker();
  };

  
  
 
  return(
    <VStack
    flex={1}
    paddingY={10}
    >
      <Box
      backgroundColor={'gray.600'}
      >
          <Image 
              source={LogoSocinpro}
              width={40}
              height={32}
              alignSelf={'center'}
              alt="LogoSocinpro"
          />  

          <ScreenHeader 
          title="Extrato SOCINPRO"/>
      </Box>
      <VStack
      justifyContent={'center'}
      alignItems={'center'}
      
      >
        
          <Box
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={"gray.600"}
          marginTop={8}
          borderRadius={10}
          width={'90%'}
          height={64}
          >
    
            <Text
            color={'gray.100'}
            fontSize={"lg"}
            fontWeight={'bold'}
            fontFamily={'heading'}
            marginBottom={2}
            >Selecione o mês de ínicio </Text>
        
              <TouchableOpacity
              onPress={()=>setDatePickerVisibility(true)}
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
                >{selectedDate.format('DD/MM/YY')}</Text>
              </TouchableOpacity>
    
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              display="spinner" // Utilize "spinner" para exibir seleção de mês e ano
              confirmTextIOS="Confirmar" // Texto do botão de confirmação no iOS
              
              cancelTextIOS="Cancelar" // Texto do botão de cancelamento no iOS
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <Text
            marginTop={4}
            color={'gray.100'}
            fontSize={"lg"}
            fontWeight={'bold'}
            fontFamily={'heading'}
    
            >Selecione o mês final</Text>
        
              <TouchableOpacity
              onPress={()=>setDatePickerVisibility(true)}
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
                >{selectedDate.format('DD/MM/YY')}</Text>
              </TouchableOpacity>
    
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              display="spinner" // Utilize "spinner" para exibir seleção de mês e ano
              confirmTextIOS="Confirmar" // Texto do botão de confirmação no iOS
              
              cancelTextIOS="Cancelar" // Texto do botão de cancelamento no iOS
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
    
            
              <TouchableOpacity
              style={{
                backgroundColor:'#00875F',
                width:150,
                height:35,
                borderRadius:10,
                justifyContent:'center',
                alignItems:'center',
                marginTop:20
              }}
              >
                <Text
                color={'white'}
                >Gerar Relatório
                </Text>
              </TouchableOpacity>
           
          </Box>
        
        
      
     </VStack>



    </VStack>

    
  )
}