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
        <Image
          source={BackgroundImg}
          resizeMode="contain"
          position={'absolute'}
          alt='Pessoas treinando'
        ></Image>
        
        <Center my={24}>
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
          <Heading mt={2} mb={3} color={"white"} fontFamily={"heading"} fontSize={'xl'} >Crie sua conta</Heading>
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