import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"

import LogoSvg from '@assets/icon_vazada.png'

import BackgroundImg from  '@assets/fundo-app-socinpro.jpeg'
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp(){
  return(
    <ScrollView  contentContainerStyle={{flexGrow:1}}>
      <VStack 
      backgroundColor={'gray.700'}
      flex={1}
      >
        <Image mt={4}
          source={BackgroundImg}
          resizeMode="contain"
          position={'absolute'}
          alt='Pessoas treinando'
        ></Image>
        
        <Center my={"16"}>
          <Image 
          source={LogoSvg}
          resizeMode="stretch"
          width={150}
          height={100}
          borderWidth={2}

          
          ></Image>
          <Text color={'gray.100'}  fontFamily={'heading'} fontSize={'sm'}>Protegendo seus direitos</Text>
        </Center>

        <Center>
          <Heading  mb={3} color={"white"} fontFamily={"heading"} fontSize={'xl'} >Crie sua conta</Heading>
        </Center>

        <Center mt={4}>
          <Input 
          placeholder="CPF ou CNPJ"
          keyboardType="number-pad"
          ></Input>
          <Input 
          placeholder="Código SOCINPRO"
          keyboardType="number-pad"
          ></Input>
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
          ></Input>
          <Input 
          placeholder="Confirme a senha"
          keyboardType="default"
          ></Input>

        </Center>

        <Center mt={0}>
          <Button title="Criar e acessar"/>
        </Center >

        <Center mt={0}>
          <Button title="Voltar para o login" variant={'outline'}></Button>
        </Center>



      </VStack>
    
    </ScrollView>

  )
}