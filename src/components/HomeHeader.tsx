import { VStack, Text, Heading, HStack, Icon} from "native-base";
import { UserPhoto } from "./UserPhoto";
import{ MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export function HomeHeader(){
  return(
    <HStack bg={"gray.600"} pt={16} pb={5} px={8} alignItems={'center'}>
      <UserPhoto
      source={{uri:'https://github.com/matheusguim21.png'}}
      size={16}
      marginRight={2}
      alt="imagem do usuário"
      />
      <VStack marginRight={"40"}
      
      >
        <Text color={'gray.100'} fontSize={'md'} >Olá,</Text>
        
        <Heading color={'gray.100'} fontSize={"xl"} >Matheus</Heading>
      </VStack>

     <TouchableOpacity>
        <Icon
        as={MaterialIcons}
        name="logout"
        color={"gray.200"}
        size={7}

        />
     </TouchableOpacity>
    </HStack>

  )
}