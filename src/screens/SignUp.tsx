import {useNavigation} from '@react-navigation/native'
import { Button as NativeBaseButton,Text,  VStack, Center, Heading, ScrollView,useToast, HStack} from "native-base"
import { Image } from "native-base"
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSocinpro from '@assets/logos/LogoSocinpro.png'


import BackgroundImg from  '@assets/backgrounds/SignUp.jpg'
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import {useForm, Controller,} from  'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from 'react'
import { ShowPasswordButton } from '@components/ShowPasswordButton'


type FormDataProps ={
  name:string,
  email:string,
  password:string,
  confirmPassword:string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe seu nome').trim(),
  email: yup.string().required('Informe seu e-mail').email('Email inválido').matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i
  , 'Email inválido').trim(),
  password: yup.string().required('Informe sua senha').min(6, 'A senha deve ter no mínimo 6 caracteres').max(12,'A senha deve ter no máximo 12 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/, 'A senha deve conter ao menos uma letra maiúscula, uma letra minúscula e um número.').trim('Não adicione espaços'),
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

  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const handleMostrarSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };
  const [senhaVisivel2, setSenhaVisivel2] = useState(false)
  const handleMostrarSenha2 = () => {
    setSenhaVisivel2(!senhaVisivel2);
  };
 

   

  return(
    <ScrollView  contentContainerStyle={{flexGrow:1, backgroundColor:'#000'}}>
      <VStack 
      
      flex={1}
      backgroundColor={'black'}
      >
        <Image
          source={BackgroundImg}
          resizeMode="cover"
          position={'absolute'}
          height={'full'}
          width={'full'}
          backgroundColor={'black'}
          alt='Pessoas treinando'
        ></Image>
        
        <Center mt={16}>
          <Image
          width={'56'}
          height={'48'}
          source={LogoSocinpro}
          alt='LogoSocinpro'
          />
          <Text color={'blue.300'}  fontFamily={'heading'} fontSize={'md'}  mt={-7}>Cuidando do que é seu</Text>
        </Center>

        <Center mt={1}>
          <Heading mt={12} mb={3} color={"white"} fontFamily={"heading"} fontSize={'xl'} >Crie sua conta</Heading>
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
           secureTextEntry={!senhaVisivel}
           value={value}
           onChangeText={onChange}
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
            mx={3}
            mt={1}
            mb={-3}
            >
        <ShowPasswordButton visible={senhaVisivel}/>
       </NativeBaseButton>
         
           
             <Controller
             name='confirmPassword'
             control={control}
             
             render={({field:{onChange, value}}) =>
             <Input 
             signup
             placeholder="Confirme a senha"
             autoComplete='password-new'
             autoCapitalize='none'
             secureTextEntry={!senhaVisivel}
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
          onPress={()=> navigation.navigate('signIn')}
          ></Button>
        </Center>



      </VStack>
    
    </ScrollView>

  )
}