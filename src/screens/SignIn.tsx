import {useNavigation} from '@react-navigation/native'
import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSvg from '@assets/logo.svg'

import BackgroundImg from  '@assets/background.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"


export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>()


  return(
    
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
        source={BackgroundImg}
        alt={'Pessoas treinando'}
        resizeMode="contain"
        position={'absolute'}
        />
        <Center my={24} >
          <LogoSvg/>
          <Text color={"gray.100"} fontSize={"sm"}>Treine a sua mente e o seu corpo</Text>
        </Center>
  
      <Center mt={32}>
        <Heading color={"gray.100"} mb={6} fontSize={'xl'} fontFamily={"heading"}>Acesse sua conta</Heading>
  
        <Input placeholder="E-mail" autoComplete="email" keyboardType="email-address" autoCapitalize="none"/>
        <Input placeholder="Senha" autoComplete="password" secureTextEntry/>
        
        <Button title="Acessar" onPress={()=> navigation.navigate('main')}/>
        </Center>
  
        <Center mt={20}>
          <Text 
            color={'gray.100'}
            mb={4}
          >Ainda não tem acesso?</Text>
        
          <Button 
          title="Criar conta" 
          variant={'outline'}
          onPress={()=> navigation.navigate('signUp')}
          />
        </Center>
  
        
        
  
      
      </VStack>
    </ScrollView >

  )
}