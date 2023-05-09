import { HStack, Image, VStack, Text, Heading } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &{

}

export function ExerciseCard({...rest}){
  return(
    <TouchableOpacity {...rest} style={{marginVertical:4}}>
      <HStack backgroundColor={"gray.500"} p={2}  pr={4} alignItems={"center"} rounded={"lg"}>
        <Image 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxPLxotcfoa1-BF_Fr00cvvwTdBznp8dKYA&usqp=CAU'}}
        size={16}
        rounded={'md'}
        alt="Imagem de exercicio"
        
        />
        <VStack mx={4}>
          <Heading fontSize="lg" fontWeight="bold" color={"white"}>
            Remada Unilateral
          </Heading>
          <Text color={"gray.200"} mt={1} numberOfLines={2} >
            3 séries x 12 repetições
          </Text>
           
        </VStack>
      </HStack>
    </TouchableOpacity>
  )
}