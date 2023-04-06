import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"

import LogoSvg from '@assets/icon_vazada.png'

import BackgroundImg from  '@assets/background_image-login.jpg'
import { Input } from "@components/Input"
import { Button } from "@components/Button"


export function SignIn(){
  return(
    
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg={'gray.700'}>
        <Image
        source={BackgroundImg}
        alt={'Pessoas treinando'}
        resizeMode="stretch"
        position={'absolute'}
        />
        <Center mt={"32"} >
          <Image
          source={LogoSvg}
          resizeMode="stretch"
          width={150}
          height={100}
          borderWidth={2}
          />
          <Text color={"gray.100"} fontSize={"sm"}>Cuidando dos seus direitos</Text>
        </Center>
  
      <Center mt={16}>
        <Heading color={"gray.100"} mb={6} fontSize={'xl'} fontFamily={"heading"}>Acesse sua conta</Heading>
  
        <Input mt={6} placeholder="Usuário" autoComplete="email" keyboardType="email-address" autoCapitalize="none"/>
        <Input placeholder="Senha" autoComplete="password" secureTextEntry/>
        
        <Button title="Acessar"/>
        </Center>
  
        <Center mt={32}>
          <Text 
            color={'gray.100'}
            mb={4}
          >Ainda não tem acesso?</Text>
        
          <Button title="Criar conta" variant={'outline'}/>
        </Center>
  
        
        
  
      
      </VStack>
    </ScrollView >

  )
}