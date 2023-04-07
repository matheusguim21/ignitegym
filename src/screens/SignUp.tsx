import { Text, VStack, Center, Heading, ScrollView, View, Box, HStack } from "native-base"
import { Image } from "native-base"

import LogoSvg from '@assets/icon_vazada.png'

import BackgroundImg from  '@assets/fundo-app-socinpro.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"


export function SignUp(){
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  return(
    <ScrollView  contentContainerStyle={{flexGrow:1}}>
      <VStack 
      backgroundColor={'gray.700'}
      flex={1}
      >
        <Image
          source={BackgroundImg}
          resizeMode="contain"
          position={'absolute'}
          alt='Imagem de fund'
        ></Image>
        
        <Center mt={"10"}>
          <Image 
          source={LogoSvg}
          resizeMode="stretch"
          width={300}
          height={200}
          borderWidth={0}
          alt="Logo Socinpro"

          
          ></Image>
          <Text mt={-9} color={'gray.100'}  fontFamily={'heading'} fontSize={'sm'}>Protegendo seus direitos</Text>
        </Center>

        <Center mt={6}>
          <Heading  mb={3} color={"gray.100"} fontFamily={"heading"} fontSize={'xl'} >Crie sua conta</Heading>
        </Center>

        <Center mt={4}>
          
      
          <HStack flex={1} >
            <Input mx={2}
            placeholder="CPF ou CNPJ"
            color={'green.500'}
            keyboardType="number-pad"
            variant={'CPF'}
            ></Input>
            <Input mx={2}
            placeholder="Código SOC"
            keyboardType="number-pad"
            variant={'SOC'}
            color={'blue.400'}
            ></Input>
          </HStack>
          <Input 
          placeholder="Nome de apresentação"
          keyboardType="default"
      
          ></Input>
          <Input 
          placeholder="Nome de usuário"
        keyboardType="default"
          ></Input>
          <Input 
          placeholder="Senha"
          keyboardType="default"
          secureTextEntry
          ></Input>
          <Input 
          placeholder="Confirme a senha"
          keyboardType="default"
          secureTextEntry
          ></Input>

        </Center>

        <Center mt={4}>
          <Button title="Criar e acessar"/>
        </Center >

        <Center mt={0 } mb={-8}>
          <Text  mb={2}fontFamily={'mono'} fontSize={'md'} color={'gray.100'}>Já tem cadastro?</Text>
          <Button title="Voltar para o login" variant={'outline'} onPress={()=> navigation.navigate('signIn')} ></Button>
        </Center>



      </VStack>
    
    </ScrollView>

  )
}