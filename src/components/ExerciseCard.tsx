import { HStack, Image, VStack, Text, Heading, Icon,  } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {Entypo} from "@expo/vector-icons"



type Props = TouchableOpacityProps &{

}
type Exercise = {
  exercise:{
  name:string;
  serie:string;
  imagem:string;
  }
}

export function ExerciseCard({exercise}:Exercise,  { ...rest}){
  return(
    <TouchableOpacity {...rest} style={{marginVertical:4}}>
      <HStack backgroundColor={"gray.500"} p={2}  pr={4} alignItems={"center"} rounded={"lg"}>
        <Image 
        source={{uri:exercise.imagem}}
        size={16}
        rounded={'md'}
        alt="Imagem de exercicio"
        resizeMode="center"
        
        />

        <VStack mx={4} flex={1}>
          <Heading fontSize="lg" fontWeight="bold" color={"white"}>
            {exercise.name}
          </Heading>
          <Text color={"gray.200"} mt={1} numberOfLines={2} >
            {exercise.serie}
          </Text>
           
        </VStack>


        <Icon as={Entypo} name="chevron-thin-right" />
      </HStack>
    </TouchableOpacity>
  )
}