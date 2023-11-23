import { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as yup from 'yup'
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import {Controller, useForm} from 'react-hook-form'
import { useAuth } from '@hooks/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import DefaultUserPhoto from '@assets/profile.svg'


const PHOTO_SIZE = 33;

type FormDataProps ={
  email:string;
  name:string;
  old_password:string
  password:string;
  confirm_password:string

}

const profileSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  old_password: yup.string().nullable().transform((value)=> !!value ? value : null).notRequired().when("password" ,{
    is:(Field:any) => Field,
    then:(schema) => schema.nullable().required("Digite a senha antiga").transform((value)=> !!value? value: null)
  }),
  password:yup.string().min(6, "A senha deve ter pelo menos 6 digítos").nullable().transform((value)=> !!value ? value: null),
  confirm_password: yup.string()
  .nullable().
  transform((value)=> !!value ? value : null)
  .oneOf([yup.ref("password")], "Senhas não conferem")
  .when("password", {
    is:(Field:any) => Field != null ,
    then: (schema)=> schema.nullable().required("Informe a senha de confirmação")
  } )
  
})

export function Profile() {

  const {user,handleUpdateUser,  }= useAuth()

  const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>({
    defaultValues:{
      name:user.name,
      email:user.email,

    },
    resolver:yupResolver(profileSchema as any)
  })

  const [isUpdating, setIsUpdating] = useState(false)
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://github.com/matheusguim21.png');

  const toast = useToast();


  async function handleUserPhotoSelected(){
    setPhotoIsLoading(true);
    
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4], 
        allowsEditing: true,
      });
      
  
      if(photoSelected.canceled) {
        return;
      }

      if(photoSelected.assets[0].uri) {

        const photoInfo  : FileSystem.FileInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
        
        if(photoInfo && (photoInfo.size  / 1024 / 1024 ) > 5){
          
          return toast.show({
            title: 'Essa imagem é muito grande. Escolha uma de até 5MB.',
            placement: 'top',
            bgColor: 'red.500'
          })
        }

        const fileExtension = photoSelected.assets[0].uri.split('.').pop()
        console.log(fileExtension)
        console.log(user.avatar)
        user.avatar = photoSelected.assets[0].uri
        handleUpdateUser(user)

        const photoFile ={
          name: `${user.name}.${fileExtension}`.toLocaleLowerCase(),
          uri:photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`
        }
        console.log(photoFile)

      }
  
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }
  async function handleProfileUpdate(data:FormDataProps){
    try{
      setIsUpdating(true)
      const response = await api.put("/users", data)
      console.log(response.data)
      const userUpdated = user;
      userUpdated.name = data.name

      handleUpdateUser(userUpdated)

      toast.show({
        title:"Perfil atualizado com sucesso",
        backgroundColor:"green.500",
        placement:"top",
        duration:1500
      })


    }catch(error){
      const isAppError = error instanceof AppError;
      const title = isAppError? error.message : "Não foi possível atualizar os dados de usuário. Tente novamente mais tarde";

      toast.show({
        title,
        backgroundColor:"red.500",
        placement:"top", 
        duration: 1500
      })

    }finally{
      setIsUpdating(false)
    }
  }

  console.log(user.avatar)
  
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton 
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
            :
              <UserPhoto 
                source={{ uri:user.avatar }}
                alt="Foto do usuário"
                size={PHOTO_SIZE}
              />
          }
          
          <TouchableOpacity onPress={handleUserPhotoSelected}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Controller
          control={control}
          name='name'
          render={({field:{onChange,value}})=>(
            <Input 
            bg="gray.600" 
            placeholder='Nome' 
            value={value}
            onChangeText={onChange}
            errorMessage={errors.name?.message}
          />
          )}
         />
         <Controller
         control={control}
         name='email'
         render={({field:{onChange, value}})=>(
            
          <Input 
          bg="gray.600" 
          placeholder="E-mail"
          value={value}
          onChangeText={onChange}
          isDisabled
          errorMessage={errors.email?.message}
        />
         )}
         />

        
          <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily="heading">
            Alterar senha
          </Heading>
          <Controller
          control={control}
          name='old_password'
          render={({field:{onChange}})=>(
            <Input 
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
            onChangeText={onChange}
            errorMessage={errors.old_password?.message}
          />
          )}
          />
          <Controller
          control={control}
          name='password'
          render={({field:{onChange, value}})=>(
            <Input 
            bg="gray.600"
            placeholder="Nova senha"
            secureTextEntry
            onChangeText={onChange}
            errorMessage={ errors.password?.message}
            
          />
          )}
          />
          <Controller
          control={control}
          name='confirm_password'
          render={({field:{onChange}})=>(
            <Input 
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
            onChangeText={onChange}
            errorMessage={errors.confirm_password?.message}
          />
          )}
          />
          
         

        

          

          <Button title="Atualizar" mt={4}
          isLoading={isUpdating}
          onPress={handleSubmit(handleProfileUpdate)}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}