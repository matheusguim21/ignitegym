import { SafeAreaView, TouchableOpacity } from "react-native"
import { UserPhoto } from "./UserPhoto"
import { FunctionComponent } from "react"
import { useToast } from "native-base"
import { useState } from "react"
import { Text } from "native-base"
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import UserPhotoDefault from '@assets/userPhotoDefault.png'
import { StyleSheet } from "react-native"
import { transparentize } from "native-base/lib/typescript/theme/tools"

export let userPhotoFinal:string| undefined = ''
type Props={
  handleClose:VoidFunction;
  userPhotoStatus:string|undefined;
}

const PHOTO_SIZE = 20;



export function UserPhotoModal({handleClose, userPhotoStatus}:Props ){
  const toast = useToast()

  const [userPhoto, setUserPhoto]= useState(userPhotoStatus)
  async function handleUserPhotoSelect() {

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4],
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

        if (photoInfo.exists && photoInfo.size && (photoInfo.size / 1024 / 1024) > 3) {
          handleClose()
          return toast.show({
            title: 'Imagem muito grande. Escolha uma imagem de até 5MB',
            bgColor: 'red.500',
            placement: 'top',
            duration: 3000,
            rounded: 'md',
            alignSelf: 'center'
          });
        }

        toast.show({
          title: 'Imagem alterada com sucesso',
          bgColor: 'green.500',
          rounded: 'md',
          placement: 'top',
          duration: 2000,
        });

        setUserPhoto(photoSelected.assets[0].uri);
        userPhotoFinal = photoSelected.assets[0].uri
        console.info(userPhotoFinal);
        handleClose()
      }
    } catch (error) {
      console.log(error);
    } 
  }
  return(
    <SafeAreaView
    style={styles.container}
    >
      

      <TouchableOpacity
      style={styles.container2}
      onPress={handleClose}
      >
        <UserPhoto
            
            uri={userPhoto ?  userPhoto: UserPhotoDefault}
            size={PHOTO_SIZE}
            alt="Foto de perfil"
            source={userPhoto ? { uri: userPhoto } : UserPhotoDefault}
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
              <Text color={'green.500'} mt={3}>
                Alterar foto
              </Text>
            </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#202024'
    
  }
})