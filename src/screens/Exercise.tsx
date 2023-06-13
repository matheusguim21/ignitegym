import {Image, HStack, Heading, Icon, Box, VStack, Text, ScrollView} from "native-base"
import { TouchableOpacity } from "react-native"
import {Feather} from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native"
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button"


export function Exercise(){
  const navigation = useNavigation()
  const route = useRoute()
  console.log(route.params)
  function handleBackButton(){
    navigation.goBack()
  }
  return(
    <VStack flex={1}>
      <VStack px={2} bgColor={'gray.600'} pt={12}>
        
          <TouchableOpacity 
          onPress={handleBackButton}
          style={{
            width:60, 
            height:50,
            alignSelf:'flex-start',
            justifyContent:'center',
            alignItems:'center'
            
            }}>
            <Icon as={Feather}
            name='arrow-left'
            color={'green.500'}
            size={7}
            
            width="full"
            height={'full'}
            
            />
          </TouchableOpacity>

          <HStack mt={3} mb={8} px={4} justifyContent={'space-between'} alignItems={"center"} >
            <Heading color={'gray.100'} fontSize="lg" flexShrink={1}>
              Título: {route.params.obra.name}
            </Heading>

            <HStack alignItems={"center"}>
              <BodySvg/>
              <Heading textTransform={"capitalize"} color={'gray.200'} ml={1} fontSize={"md"} >
               Autor: {route.params.obra.autor}
              </Heading>
            </HStack>
          </HStack>
        
      </VStack>
      
      <ScrollView>
        <VStack p={8}>
          <Image
          w={'full'}
          h={'96'}
          resizeMode="cover"
          alt="Imagem do exercício"
          mb={3}
          rounded={"lg"}
  
          source={{uri:route.params.obra.image}}
          />
  
         <Box bgColor={'gray.400'}>

          <HStack justifyContent={'space-between'} padding={5}>
            <Text color={'gray.100'}>
             Ano: {route.params.obra.ano}
            </Text>
            <Text color={'gray.100'}>
             Código: {route.params.obra.codigo}
            </Text>
          </HStack>
         </Box>
  
        </VStack>
      </ScrollView>
    </VStack>


  )
}