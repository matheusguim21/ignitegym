import {useNavigation} from '@react-navigation/native'
import { Text, VStack, Center, Heading, ScrollView,useToast} from "native-base"
import { Image } from "native-base"
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSvg from '@assets/logo.svg'

import BackgroundImg from  '@assets/background.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import {useForm, Controller,} from  'react-hook-form'



type FormDataProps ={
  name:string,
  email:string,
  password:string,
  confirmPassword:string
}


export function SignUp(){
  const toast = useToast();

  const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>();
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
        rules={{
          pattern: {
            value: /^[\p{L}\s'\-]+$/u,
            message:'Digite um nome válido'
          },
          
          required:'Informe seu nome'
          
        }}
        
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
         rules={{
           required:'Informe seu e-mail',
           pattern: {
             value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
             message: 'E-mail inválido'
            }
          }}
          
          render={({field:{onChange, value}})=>
           <Input 
             signup
             placeholder="E-mail"
             value={value}
             onChangeText={onChange}
             errorMessage={errors.email?.message}
             ></Input>
         }
         />
            
         <Controller
         name='password'
         control={control}
         rules={{
            required:'Informe sua senha',
            pattern:{
            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/,
            message:'A senha deve conter ao menos uma letra maiúscula, uma letra minúscula e um número.\nNo mínimo 6 e no máximo 12 caracteres.'
          }

         }}
         

         render={({field:{onChange, value}}) =>
         <Input 
         signup
         placeholder="Senha"
         value={value}
         onChangeText={onChange}
         errorMessage={errors.password?.message}
         />
        }
         />

         <Controller
         name='confirmPassword'
         control={control}
         rules={{
          required:'Informe sua senha novamente',
          
       }}
         render={({field:{onChange, value}}) =>
         <Input 
          signup
          placeholder="Confirme a senha"
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