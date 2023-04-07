import { Text, VStack, Center, Heading, ScrollView, HStack } from "native-base"
import { Image } from "native-base"

import LogoSvg from '@assets/icon_vazada.png'

import BackgroundImg from  '@assets/fundo-app-socinpro.png'

import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"


export function ResetPassword(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return(
    
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg={'gray.700'}>
        <Image
        source={BackgroundImg}
        alt='Imagem de fundo'
        resizeMode="cover"
        position={'absolute'}
        />
        <Center mt={"24"} >
          <Image ml={3}
          source={LogoSvg}
          resizeMode="stretch"
          width={300}
          height={200}
          borderWidth={2}
          alt="Logo"
          />
          <Text mt={-9} color={"gray.100"} fontFamily={'heading'} fontSize={"sm"}>Protegendo os seus direitos</Text>
        </Center>
  
      <Center mt={20}>
        <Heading color={"gray.100"} mb={6} fontSize={'xl'} fontFamily={"heading"}>Recuperação de senha</Heading>
  
        <Input placeholder="Usuário" autoComplete="username" autoCapitalize="none"/>
        <Center><Text color={'gray.100'} fontFamily={'body'} fontSize={'md'}>ou</Text></Center>

        <HStack mt={4} flex={1} >
            <Input mx={2}
            placeholder="CPF ou CNPJ"
            color={'green.400'}
            keyboardType="number-pad"
            variant={'CPF'}
            ></Input>
            <Input mx={2}
            placeholder="Código SOC"
            keyboardType="number-pad"
            variant={'SOC'}
            ></Input>
          </HStack>
        
        <Button title="Enviar e-mail de recuperação de senha"/>
        </Center>
  
        <Center mt={8} mb={-10}>
          <Text 
            color={'gray.100'}
            mb={4}
          >Ainda não tem acesso?</Text>
        
          <Button title="Criar conta" variant={'outline'} onPress={()=> navigation.navigate('signUp')}/>
        </Center>
  
        
        
  
      
      </VStack>
    </ScrollView >

  )
}