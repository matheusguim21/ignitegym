import { VStack, Text, Heading, HStack, Icon} from "native-base";
import { UserPhoto } from "./UserPhoto";
import{ MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {AuthNavigatorRoutesProps} from '@routes/auth.routes'


type Props ={
  name:string
  paddingX?:number
  paddingTop?:number
  userPhoto?:string;
}

export function HomeHeader({name, paddingTop, paddingX, userPhoto}:Props){
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  return(
    <HStack bg={"gray.600"} pt={paddingTop? paddingTop: 16} pb={5} px={paddingX? paddingX: 8} alignItems={'center'} justifyContent={'space-between'}>
      <HStack>
        <UserPhoto
        source={{uri:userPhoto}}
        size={16}
        marginRight={2}
        alt="imagem do usuário"
        />
        <VStack
        >
          <Text color={'gray.100'} fontSize={'md'} >Olá,</Text>
          
          <Heading color={'gray.100'} fontSize={"xl"} >{name}</Heading>
        </VStack>
      </HStack>

     <TouchableOpacity onPress={()=> navigation.navigate('signIn')}>
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