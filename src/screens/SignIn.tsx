import {useNavigation} from '@react-navigation/native'
import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSocinpro from '@assets/icon_vazada.png'

import BackgroundImg from  '@assets/fundo-app-socinpro.png'
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
        resizeMode="cover"
        position={'absolute'}
        />
        <Center my={24} >
          <Image
          size={32}
          source={LogoSocinpro}
          alt='Logo Socinpro'
          />
          <Text color={"gray.100"} fontSize={"md"}>Cuidando dos seus direitos</Text>
        </Center>
  
      <Center mt={8}>
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