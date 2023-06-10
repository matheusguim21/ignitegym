import {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import { Text, VStack,HStack, Center, Heading, ScrollView } from "native-base"
import { Image } from "native-base"
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSocinpro from '@assets/logos/LogoSocinpro.png'

import BackgroundImg from  '@assets/backgrounds/SignIn.jpg'
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import {Button as NativeBaseButton} from 'native-base'

import {useForm,Controller} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ShowPasswordButton } from '@components/ShowPasswordButton'

type FormDataProps ={
  username:string,
  password:string,
 
}

const signInSchema = yup.object({
  username: yup.string().required('Informe o seu nome de usuário').trim('Não adicione espaços no seu nome'),
  password: yup.string().required('Informe sua senha').min(6, 'A sua senha tem no mínimo 6 caracteres').max(12,'A sua senha contém no máximo 12 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/, 'A sua senha contém ao menos uma letra maiúscula, uma letra minúscula e um número.').trim('Não adicione espaços')
})

export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn(data:FormDataProps){
    console.info(data)
    navigation.navigate('main')
    clearErrors(['username', 'password'])
    
  
  }
 const  handleSignUp = ()=>{
  navigation.navigate('signUp')
  clearErrors(['username', 'password'])
 }
  const {control, handleSubmit, formState:{errors}, clearErrors} = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema)
  });

  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const handleMostrarSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return(
    
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
        source={BackgroundImg}
        alt={'Imagem de fundo'}
        resizeMode="cover"
        position={'absolute'}
        width={'full'}
        height={'full'}
        />
        <Center mt={16}>
          <Image
          width={'56'}
          height={'48'}
          source={LogoSocinpro}
          alt='LogoSocinpro'
          />
          <Text color={'blue.300'}  fontFamily={'heading'} fontSize={'md'}  mt={-7}>Cuidando do que é seu</Text>
        </Center>
  
      <Center mt={32}>
        <Heading color={"gray.100"} mb={6} fontSize={'xl'} fontFamily={"heading"}>Acesse sua conta</Heading>
  

          <Controller
          name='username'
          control={control}
          
          render={({field:{onChange, value}})=>
            <Input 
            placeholder="Nome de usuário" 
            autoComplete="username" 
            keyboardType="default" 
            autoCapitalize="none"
            onChangeText={onChange}
            value={value}
            errorMessage={errors.username?.message}
            
            
            />
            
            
          }
          />
      
      <HStack alignItems={'center'} justifyContent={'flex-end'} 
      width={'full'}>
        <Controller
        name='password'
        control={control}
        render={({field:{onChange, value}})=>
        <Input 
        
        width={323}
        placeholder="Senha" 
        autoCapitalize='none'
        autoComplete="password" 
        secureTextEntry={!senhaVisivel}
        returnKeyType='send'
        onSubmitEditing={()=> handleSubmit(handleSignIn)}
        onChangeText={onChange}
        value={value}
        errorMessage={errors.password?.message}
        
        />
        
      }
      
      
      />
      
       <NativeBaseButton
       onPress={handleMostrarSenha}
       backgroundColor={'green.700'}
       width={10}
       height={10}
       alignSelf={'center'}
       justifyContent={'center'}
       alignItems={'center'}
       rounded={'full'}
       mt={4}
       mx={3}
       >
        <ShowPasswordButton visible={senhaVisivel}/>
       </NativeBaseButton>
      </HStack>
        
        
        <Button 
        mt={10} 
        title="Acessar" 
        onPress={handleSubmit(handleSignIn)}  
        
        />
        </Center>
  
        <Center mt={18}>
          <Text 
            color={'gray.100'}
            mb={4}
          >Ainda não tem acesso?</Text>
        
          <Button 
          title="Criar conta" 
          variant={'outline'}
          onPress={handleSignUp}
        
          />
        </Center>
  
        
        
  
      
      </VStack>
    </ScrollView >

  )
}

