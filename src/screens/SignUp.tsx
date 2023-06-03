import {useNavigation} from '@react-navigation/native'
import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import Logo from '@assets/logoRevitalia.png'

import BackgroundImg from  '@assets/background-login.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return(
    <ScrollView  contentContainerStyle={{flexGrow:1}}>
      <VStack 
      
      flex={1}
      >
        <Image
        source={BackgroundImg}
        alt={'Pessoas treinando'}
        resizeMode="cover"
        position={'absolute'}
        size={'full'}
        />
        
        <Center my={24}>
        <Image
          source={Logo}
          size={32}
          resizeMode='contain'
          alt='Logo'
          mb={-5}
          />
          <Text color={"white"} fontSize={"2xl"}>Revitalia</Text>
          <Text color={'gray.100'}  fontFamily={'heading'} fontSize={'sm'}>Treine sua mente e seu corpo</Text>
        </Center>

        <Center mt={6}>
          <Heading mt={36} mb={3} color={"white"} fontFamily={"heading"} fontSize={'xl'} >Crie sua conta</Heading>
        </Center>

        <Center my={4}>
          <Input 
          placeholder="Nome"
          ></Input>
          <Input 
          placeholder="E-mail"
          ></Input>
          <Input 
          placeholder="Senha"
          ></Input>
          <Input 
          placeholder="Confirme a senha"
          ></Input>

        </Center>

        <Center>
          <Button title="Criar e acessar" onPress={()=>navigation.navigate('main')}/>
        </Center>

        <Center mt={8}>
          <Button 
          title="Voltar para o login" 
          variant={'outline'}
          onPress={()=> navigation.goBack()}
          ></Button>
        </Center>



      </VStack>
    
    </ScrollView>

  )
}