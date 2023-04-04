import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"

import LogoSvg from '@assets/logo.svg'

import BackgroundImg from  '@assets/background.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp(){
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
          alt='Pessoas treinando'
        ></Image>
        
        <Center my={24}>
          <LogoSvg/>
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
          <Button title="Criar e acessar"/>
        </Center>

        <Center mt={8}>
          <Button title="Voltar para o login" variant={'outline'}></Button>
        </Center>



      </VStack>
    
    </ScrollView>

  )
}