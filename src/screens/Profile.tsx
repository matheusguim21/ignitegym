import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader"
import { UserPhoto } from "@components/UserPhoto"
import {Center, ScrollView, Text, VStack, Skeleton, Heading, useToast} from "native-base"
import { useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'


const PHOTO_SIZE = 33;



export function Profile(){
  const toast = useToast()

  const [photoIsLoading,setPhotoIsLoading] = useState(false)
  
  const [userPhoto, setUserPhoto] = useState('https://github.com/matheusguim21.png')

  async function handleUserPhotoSelect(){
    setPhotoIsLoading(true)
    
  try{ 


    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
      aspect:[4,4],
      mediaTypes:ImagePicker.MediaTypeOptions.Images
      
    })
    console.log(photoSelected.canceled)

    if(photoSelected.canceled){
      return;
    }
    if(photoSelected.assets[0].uri){

      
      const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)
    
      console.log(photoInfo.size/1024/1024)
      
      if(photoInfo.size && (photoInfo.size/1024/1024) > 3){
        return toast.show({
          title:'Imagem muito grande. Escolha uma imagem de até 5MB',
          bgColor:'red.500',
          placement:'top',
          duration:3000,
          rounded:'md',
          alignSelf:'center'
        })
      }
        toast.show({
          title:'Imagem alterada com sucesso',
          bgColor:'green.500',
          rounded:'md',
          placement:'top',
          duration:2000,

        })
        setUserPhoto(photoSelected.assets[0].uri)
    }



  }catch(error){
    console.log(error)
  }finally{
    setPhotoIsLoading(false)
  }
}


  return(
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>
     <ScrollView  contentContainerStyle={{paddingBottom:20}}>
       <Center mt={"6"} px={10}>
          { photoIsLoading ?
            
            <Skeleton
          rounded={'full'}
          size={PHOTO_SIZE}
          startColor={'gray.700'}
          endColor={'gray.400'}
          />
            :
          <UserPhoto 
          size={PHOTO_SIZE}
          alt="Foto de perfil"
          source={{ uri:userPhoto}}
    
          />}

        <TouchableOpacity onPress={handleUserPhotoSelect}>
          <Text color={'green.500'} mt={3}>
            Alterar foto
          </Text>
        </TouchableOpacity>

        
        <Input mt={10}
        bgColor='gray.600'
        placeholder="Nome"
        defaultValue="Matheus Guimarães"
        />
        <Input 
        bgColor='gray.600'
        placeholder="Email"
        isDisabled 
        defaultValue="matheusguim13@gmail.com"
        />

      
          <Heading color={'gray.200'} fontSize={"md"} mb={2} mt={12} alignSelf={'flex-start'}>
            Alterar Senha
          </Heading>
          <Input 
          bgColor='gray.600'
          placeholder="Senha antiga"
          type="password"
          secureTextEntry
          />
          <Input 
          bgColor='gray.600'
          placeholder="Nova Senha"
          type="password"
          secureTextEntry
          />
          <Input 
          bgColor='gray.600'
          placeholder="Confirme a nova Senha"
          type="password"
          secureTextEntry
          />

          <Button title="Atualizar dados"/>
          </Center>
        
     </ScrollView>


    </VStack>


  )
}