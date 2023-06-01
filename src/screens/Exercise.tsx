import {Image, HStack, Heading, Icon, Box, VStack, Text, ScrollView} from "native-base"
import { TouchableOpacity } from "react-native"
import {Feather} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button"


export function Exercise(){
  const navigation = useNavigation()
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
              Puxada frontal 
            </Heading>

            <HStack alignItems={"center"}>
              <BodySvg/>
              <Heading textTransform={"capitalize"} color={'gray.200'} ml={1} fontSize={"md"} >
                costas
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
  
          source={{uri:'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
          />
  
          <Box bg={'gray.500'}px={10} py={4} rounded={"lg"}>
            <VStack  alignItems={"center"}
            justifyContent={"space-around"}>
              <HStack justifyContent={"center"} alignItems={"center"} mb={10}>
                <HStack alignItems={"center"}>
                  <SeriesSvg />
                  <Text color={'gray.200'} ml={3} mr={8} fontSize={"lg"}>
                    3 séries
                  </Text>
                </HStack>
                
                <HStack alignItems={"center"}>
                  <RepetitionsSvg/>
                  <Text color={"gray.200"} ml={3} fontSize={"lg"}>
                    2 repetições
                  </Text>
                </HStack>
              </HStack>
  
              <Button title="Marcar como concluído" width={320} marginBottom={1}/>
            </VStack>
          </Box>
  
        </VStack>
      </ScrollView>
    </VStack>


  )
}