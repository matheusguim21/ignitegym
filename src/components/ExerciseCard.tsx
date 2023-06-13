import { HStack, Image, VStack, Text, Heading } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{
  obra:{
    name: string;
    autor: string;
    image: string;
    }
}


export function ExerciseCard( {obra ,...rest}:Props){
  return(
    <TouchableOpacity {...rest} style={{marginVertical:4, marginBottom:10}}>
      <HStack backgroundColor={"gray.500"} p={2}  pr={4} alignItems={"center"} rounded={"lg"}>
        <Image 
        source={{uri:obra.image}}
        size={16}
        rounded={'md'}
        alt="Imagem de exercicio"
        resizeMode="cover"
        
        />
        <VStack mx={4}>
          <Heading fontSize="lg" fontWeight="bold" color={"white"}>
            {obra.name}
          </Heading>
          <Text color={"gray.200"} mt={1} numberOfLines={2} >
            {obra.autor}
          </Text>
           
        </VStack>
      </HStack>
    </TouchableOpacity>
  )
}