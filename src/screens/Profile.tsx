import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader"
import { UserPhoto } from "@components/UserPhoto"
import {Center, ScrollView, Text, VStack, Skeleton, Heading} from "native-base"
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;
export function Profile(){

  const [photoIsLoading,setPhotoIsLoading] = useState(false)

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
          source={{ uri:'https://www.github.com/matheusguim21.png'}}
    
          />}

        <TouchableOpacity>
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