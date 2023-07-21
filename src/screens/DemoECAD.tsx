import { Box, FlatList, Text, VStack, View } from "native-base";
import LogoSocinpro from '@assets/logos/logosemnome.png'
import { Image } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import dayjs  from "dayjs";
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

import LogoECAD from '@assets/logos/logo-ecad-home.svg'

import MonthPicker from "react-native-month-year-picker";

export function DemoECAD(){


  const [relatoriosGerados, setRelatoriosGerados] = useState(
    [
      dayjs().format('MM/YY'), dayjs('03/2023').format('MM/YY')
    ]
  )




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
          height={'40%'}
          borderRadius={8}
          >
              
              <VStack
              justifyContent={'flex-end'}
              alignItems={'center'}
              paddingX={10}
              marginTop={15}
              >
                <Text
                  color={'gray.100'}
                  fontSize={"md"}
                  fontWeight={'bold'}
                  fontFamily={'heading'}
                >
                  Selecione o mês
                </Text>
                
                <TouchableOpacity
              onPress={()=>setDatePickerVisibility(true)}
              style={{
                backgroundColor:'#15b94c',
                borderRadius:6
    
              }}
              >
                
                <Text
                color={'gray.100'}
                backgroundColor={'green.600'}
                fontSize={'lg'}
                textAlign={'center'}
                width={32}
                >{selectedDate.format('MM/YY')}</Text>
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
                
              </VStack>
              
          </Box>

          <Box
          backgroundColor={'gray.600'}
          width={'100%'}
          height={'40%'}
          marginTop={5}
          borderRadius={10}
          
          >
            <VStack
            alignItems={'center'}
            >
              <Text
              color={'gray.100'}
              textAlign={'center'}
              
              >Últimos relatórios gerados</Text>

              <FlatList
              data={relatoriosGerados}
              ItemSeparatorComponent={()=> (
              <View
                h={0.5}
                w={'full'}
                backgroundColor={'gray.300'}
                />
                )
              }
              keyExtractor={item => item}
              renderItem={({item})=> (

                 
                <TouchableOpacity
              onPress={()=>setDatePickerVisibility(true)}
              style={{
                backgroundColor:'#15b94c',
                borderRadius:6
    
              }}
              >
                
                <Text
                color={'gray.100'}
                backgroundColor={'green.600'}
                fontSize={'lg'}
                textAlign={'center'}
                width={32}
                >{item}</Text>
              </TouchableOpacity>
              )
            
            }
              
              />

            </VStack>

          </Box>
        
       </VStack>
    
    </VStack>

    
  );
}
