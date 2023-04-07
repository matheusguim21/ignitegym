import { Text, VStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"

import LogoSvg from '@assets/icon_vazada.png'

import BackgroundImg from  '@assets/background_image-login.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"


export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return(
    
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg={'gray.700'}>
        <Image
        source={BackgroundImg}
        alt='Imagem de fundo'
        resizeMode="stretch"
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
        <Heading color={"gray.100"} mb={6} fontSize={'xl'} fontFamily={"heading"}>Acesse sua conta</Heading>
  
        <Input placeholder="Usuário" autoComplete="username" autoCapitalize="none"/>
        <Input placeholder="Senha" autoComplete="password" secureTextEntry/>
        
        <Button title="Acessar"/>
        <Button  
        mt={-6}
        title="Esqueci a senha" 
        variant={'alternative'}
        onPress={()=> navigation.navigate('resetPassword')}

        />
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