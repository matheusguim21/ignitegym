import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, HStack, Heading, VStack, Text, Image, Box, Center } from "native-base"
import { useState } from "react"
import  {AppNavigatorRoutesProps, AppRoutes} from '@routes/app.routes'
import LogoSocinpro from '@assets/logos/LogoSocinpro.png'
import LogoSocinproSemNome from '@assets/logos/logosemnome.png'
import LogoECAD from '@assets/logos/logo-ecad-home.svg'
import MoneySvg from'@assets/icons/money.svg'

import {UserPhotoDefault} from '@assets/userPhotoDefault.png'
import dayjs from "dayjs";

type ItemProps={
  name:string;
  autor:string;
  image:string;
  ano:string;
  codigo:string;

}

type RouteParams ={
  
  params:{name:string,
  password:string},
  name:string;
  path:string;
  key:string;
  
} 

const today = dayjs().format('DD/MM/YYYY')

export function Home(){
  
  
  

  const navigation = useNavigation<AppNavigatorRoutesProps>();

 

  const route = useRoute<RouteParams>()
  route.params


  return(
    <VStack flex={1} >
       <HomeHeader userPhoto={UserPhotoDefault? UserPhotoDefault: {uri:'https://www.github.com/matheusguim21.png'}}  name={route.params.name}/>
      <VStack bg={"gray.600"}>
        <Image 
        source={LogoSocinpro}
        width={40}
        height={32}
        alignSelf={'center'}
        alt="LogoSocinpro"
        />
      </VStack>
      
      <VStack 
       marginTop={4}     
       padding={5} 
       width={'100%'}
       height={'100%'}
      >
          {/* Box Extratos */}
          <Box  
         
          width={'100%'}
          height={"32"}
          backgroundColor={'gray.400'}  
          borderRadius={"lg"}
          borderColor={'gray.300'}
          borderWidth={'1'}
          
          >
           <HStack>
             <VStack width={'50%'}
             justifyContent={'center'}
             alignItems={'center'}
  
    
             >
                <Image 
                source={LogoSocinproSemNome}
                w={'100px'}
                h={'70px'}
                alt="logoSocinpro"
    
                />
                <Text
                color={'gray.100'}
                fontSize={"lg"}
                >Extrato SOC</Text>
             </VStack>
             <VStack width={'50%'}
             justifyContent={'center'}
             alignItems={'center'}
             paddingY={4}
    
    
             >
                <LogoECAD
                width={'100px'}
                height={'60px'}
                
                />
                <Text
                marginTop={2}
                color={'gray.100'}
                fontSize={"lg"}
                >Extrato ECAD</Text>
             </VStack>
           </HStack>
          </Box>

      {/* bank Box */}
        <Box
        backgroundColor={'gray.400'}  
        borderRadius={"lg"}
        width={'100%'}
        height={'30%'}
        borderColor={'gray.300'}
        borderWidth={'1'}
        marginTop={'10'}
        >
          <VStack
          padding={4}
          alignItems={'center'}
          
          >
            <Box 
            marginBottom={4}
            // borderWidth={'1'}
            // borderColor={'amber.300'}

            >
              <HStack marginTop={4}>
                <MoneySvg
                width={'60px'} 
                height={'60px'}
                />
                <VStack
                marginLeft={4}
                >
                  <Text
                  color={'gray.200'}
                  fontWeight={"bold"}
                  fontSize={'lg'}
                  
                  >Saldo Atual: </Text>
                  <Text
                  color={"amber.300"}
                  fontSize={'lg'}
                  >R$ 100,00</Text>
                </VStack>
              </HStack>
            </Box>

            <Box 
            width={'100%'}
            height={'60%'}
            // borderColor={'gray.100'}
            // borderWidth={1}
            // borderRadius={6}
            justifyContent={'center'}
            alignItems={'center'}
            >

             <VStack
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            
             >
                <Text
                color={"white"}
                fontSize={'lg'}
                marginTop={3}
                >
                  Conta Bancária:
                  
                </Text>
                {/* <Text
                fontSize={'md'}
                color={'gray.100'}
                marginBottom={3}
                >
                  Tipo de conta: corrente
                </Text> */}
              <HStack 
              width={'100%'}
              marginTop={-2}
              justifyContent={'center'}
              alignItems={'center'}
              >
            
                {/* <Text
                color={"gray.100"}
                fontSize={'lg'}
                >
                Banco:
                   */}
                   <Text 
                  color={'purple.400'}
                  fontSize={'lg'}
                  >Nubank</Text> 
                 
                {/* </Text> */}
                
               
              </HStack>
              <HStack
              justifyContent={'center'}
              alignItems={'center'}
              >
              {/* <Text
                color={"gray.100"}
                >
                  Agência: 0001 {'\n'}
                </Text>
                <Text
                color={"gray.100"}
                >
                 
                  Conta: 27898492-1  {'\n'}
                </Text> */}
              </HStack>
            <Text
            color={'gray.200'}
            fontSize={'md'}
            marginTop={5}
            alignSelf={'center'}            >
              Último Atualização: {today}
            </Text>
  
             </VStack>
            </Box>

          </VStack>
  
        </Box>
      </VStack>
    </VStack>


  )
}

