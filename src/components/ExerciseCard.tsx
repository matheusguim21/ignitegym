import { HStack, Image, VStack, Text, Heading, Icon,  } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {Entypo} from "@expo/vector-icons"



type Props = TouchableOpacityProps &{

}

export function ExerciseCard({...rest}){
  return(
    <TouchableOpacity {...rest} style={{marginVertical:4}}>
      <HStack backgroundColor={"gray.500"} p={2}  pr={4} alignItems={"center"} rounded={"lg"}>
        <Image 
        source={{uri:'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
        size={16}
        rounded={'md'}
        alt="Imagem de exercicio"
        resizeMode="center"
        
        />

        <VStack mx={4} flex={1}>
          <Heading fontSize="lg" fontWeight="bold" color={"white"}>
            Remada Unilateral
          </Heading>
          <Text color={"gray.200"} mt={1} numberOfLines={2} >
            3 séries x 12 repetições
          </Text>
           
        </VStack>


        <Icon as={Entypo} name="chevron-thin-right" />
      </HStack>
    </TouchableOpacity>
  )
}