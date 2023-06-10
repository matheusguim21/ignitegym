import {useNavigation} from '@react-navigation/native'
import { Text, VStack, Center, Heading, ScrollView,useToast, HStack} from "native-base"
import { Image } from "native-base"
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSvg from '@assets/logo.svg'


import BackgroundImg from  '@assets/background.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import {useForm, Controller,} from  'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from 'react'


type FormDataProps ={
  name:string,
  email:string,
  password:string,
  confirmPassword:string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe seu nome').trim(),
  email: yup.string().required('Informe seu e-mail').email('Email inválido').trim(),
  password: yup.string().required('Informe sua senha').min(6, 'A senha deve ter no mínimo 6 dígitos').max(12,'A senha deve ter no máximo 12 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/, 'A senha deve conter ao menos uma letra maiúscula, uma letra minúscula e um número.').trim('Não adicione espaços'),
  confirmPassword:yup.string().required('Informe a senha novamente').oneOf([yup.ref('password')],'As senhas não conferem').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/, 'A senha deve conter ao menos uma letra maiúscula, uma letra minúscula e um número.').trim()

});

export function SignUp(){
  const toast = useToast();

  const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>({
   resolver: yupResolver(signUpSchema)
  });
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignUp(data:FormDataProps){
   
    console.log(data)
    
    navigation.navigate('main')
  }
 

   

  return(
    <ScrollView  contentContainerStyle={{flexGrow:1}}>
      <VStack 
      
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

        <Controller
        control={control}
        name='name'
        
        
        render={({field:{onChange, value}})=> 
          <Input 
          signup
          placeholder="Nome"
          value={value}
          onChangeText={onChange}
          errorMessage={errors.name?.message}
          ></Input>
        }
        />
        
        
         
         <Controller 
         name='email'
         control={control}
         
          
          render={({field:{onChange, value}})=>
           <Input 
             signup
             placeholder="E-mail"
             autoComplete='email'
             autoCapitalize='none'
             value={value}
             onChangeText={onChange}
             errorMessage={errors.email?.message}
             ></Input>
         }
         />
            
         <Controller
         name='password'
         control={control}
             
         render={({field:{onChange, value}}) =>
         <Input 
         signup
         placeholder="Senha"
         autoComplete='password-new'
         autoCapitalize='none'
         secureTextEntry
         value={value}
         onChangeText={onChange}
         errorMessage={errors.password?.message}
         />
        }
         />
           <Controller
           name='confirmPassword'
           control={control}
           
           render={({field:{onChange, value}}) =>
           <Input 
           signup
           placeholder="Confirme a senha"
           autoComplete='password-new'
           autoCapitalize='none'
           secureTextEntry
           value={value}
           onChangeText={onChange}
           onSubmitEditing={handleSubmit(handleSignUp)}
           returnKeyType='send'
           errorMessage={errors.confirmPassword?.message}
           
           ></Input>
          }
           />
        
          
          

        </Center>

        <Center>
          <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)}/>
        </Center>

        <Center mt={8}>
          <Button 
          title="Voltar para o login" 
          variant={'outline'}
          onPress={()=> navigation.goBack()}
          ></Button>
        </Center>



      </VStack>
    
    </ScrollView>

  )
}