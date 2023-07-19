import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, HStack, Heading, VStack, Text, Image, Box, Center, theme } from "native-base"
import { useState } from "react"
import { useToast } from "native-base";
import { Modal } from "react-native";
import  {AppNavigatorRoutesProps, AppRoutes} from '@routes/app.routes'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'



import { UserPhoto } from "@components/UserPhoto";
import LogoSocinpro from '@assets/logos/LogoSocinpro.png'
import LogoSocinproSemNome from '@assets/logos/logosemnome.png'
import LogoECAD from '@assets/logos/logo-ecad-home.svg'
import MoneySvg from'@assets/icons/money.svg'
import BankSvg from '@assets/icons/bank.svg'
import DetailsSvg  from '@assets/icons/details.svg'




import {UserPhotoDefault} from '@assets/userPhotoDefault.png'
import dayjs from "dayjs";
import { TouchableOpacity } from "react-native";

type ItemProps={
  name:string;
  autor:string;
  image:string;
  ano:string;
  codigo:string;

}

type RouteParams ={
  
  params:{name:string,
  password:string},
  name:string;
  path:string;
  key:string;
  
} 


const today = dayjs().format('DD/MM/YYYY')

const PHOTO_SIZE = 20;




export function Home(){

  const toast = useToast()


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

        if (photoInfo.exists && photoInfo.size && (photoInfo.size / 1024 / 1024) > 10) {
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
        
      }
    } catch (error) {
      console.log(error);
    } 
  }
  
  const [bank, setbank] = useState('Bradesco')
  const [changePhotoVisible, setChangePhotoVisible] = useState(false)
  const [userPhoto, setUserPhoto] = useState<string | undefined>(undefined);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
 

  const route = useRoute<RouteParams>()
  route.params
  return(
    <VStack flex={1} >

      
       
         <HomeHeader 
         name={route.params.name}
         userPhoto={userPhoto}/>
        <TouchableOpacity
        style={{
          backgroundColor:'#202024',
        }}
       onPress={()=> handleUserPhotoSelect()}
       ><Text 
       marginLeft={8}
       marginTop={-4}
       color={'green.500'}>Alterar foto</Text>
        </TouchableOpacity>
      <VStack bg={"gray.600"}>
        <Image 
        source={LogoSocinpro}
        width={40}
        height={32}
        alignSelf={'center'}
        alt="LogoSocinpro"
        
        />
      </VStack>
      
      <VStack 
       marginTop={4}     
       padding={5} 
       width={'100%'}
       height={'100%'}
      >
          {/* Box Extratos */}
          <Box  
         
          width={'100%'}
          height={"32"}
          backgroundColor={'gray.400'}  
          borderRadius={"lg"}
          borderColor={'gray.300'}
          borderWidth={'1'}
          
          >
           <HStack>
             <VStack width={'50%'}
             justifyContent={'center'}
             alignItems={'center'}
  
    
             >
                <Image 
                source={LogoSocinproSemNome}
                w={'100px'}
                h={'70px'}
                alt="logoSocinpro"
    
                />
                <Text
                color={'gray.100'}
                fontSize={"lg"}
                >Extrato SOC</Text>
             </VStack>
             <VStack width={'50%'}
             justifyContent={'center'}
             alignItems={'center'}
             paddingY={4}
    
    
             >
                <LogoECAD
                width={'100px'}
                height={'60px'}
                
                />
                <Text
                marginTop={2}
                color={'gray.100'}
                fontSize={"lg"}
                >Extrato ECAD</Text>
             </VStack>
           </HStack>
          </Box>

      {/* bank Box */}
        <Box
        backgroundColor={'gray.400'}  
        borderRadius={"lg"}
        width={'100%'}
        height={'30%'}
        borderColor={'gray.300'}
        borderWidth={'1'}
        marginTop={'10'}
        >
          <VStack
          padding={4}
          alignItems={'center'}
          
          >
            <Box 
            marginBottom={4}
            // borderWidth={'1'}
            // borderColor={'amber.300'}

            >
              <HStack 
              h={20}
              width={'80%'}
              marginRight={-4}
              justifyContent={'space-between'}
              alignItems={'center'}
              
              >
                <MoneySvg
                width={'60px'} 
                height={'60px'}
                />
                <VStack
                marginLeft={6}
                >
                  <Text
                  color={'gray.200'}
                  fontWeight={"bold"}
                  fontSize={'lg'}
                  >Saldo Atual </Text>
                  <Text
                  color={"amber.300"}
                  fontSize={'lg'}
                  >R$ 100,00</Text>
                </VStack>
                <TouchableOpacity
                
                
                
                >
                  <DetailsSvg
                 style={{marginLeft:40}}
                 width={'25px'}
                 height={'25px'}
                 fill={theme.colors.gray[100]}
                 
                 />
                </TouchableOpacity>
              </HStack>
            </Box>

            <Box 
            width={'100%'}
            height={'60%'}
            // borderColor={'gray.100'}
            // borderWidth={1}
            // borderRadius={6}
            justifyContent={'center'}
            alignItems={'center'}
            >

             <VStack
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            
             >
               
              <HStack 
              width={'82%'}
              marginRight={-4}
              justifyContent={'space-between'}
              alignItems={'center'}
              
              >
            
                {/* <Text
                color={"gray.100"}
                fontSize={'lg'}
                >
                Banco:
              */}
              <BankSvg
              width={'72px'} 
              height={'72px'}
              style={{marginLeft:-5,}}
              />
                   <Text
                   numberOfLines={1}
                   marginLeft={-5}
                  
                   maxWidth={'150px'}
                   color={bank === 'Nubank'? "purple.500": bank ==='Inter'? "orange.500": bank === 'Banco do Brasil'? "#f5f517": bank === 'Bradesco' ? 'red.600': "white"}
                   fontSize={'23px'}
                  
                  >{bank}</Text> 
                 
                {/* </Text> */}
                
               <TouchableOpacity
               
               
               >
                 <DetailsSvg
                 style={{marginRight:4}}
                 width={'25px'}
                 height={'25px'}
                 fill={theme.colors.gray[100]}
                 
                 />
               </TouchableOpacity>
              </HStack>
              <HStack
              justifyContent={'center'}
              alignItems={'center'}
              >
              {/* <Text
                color={"gray.100"}
                >
                  Agência: 0001 {'\n'}
                </Text>
                <Text
                color={"gray.100"}
                >
                 
                  Conta: 27898492-1  {'\n'}
                </Text> */}
              </HStack>
            <Text
            color={'gray.200'}
            fontSize={'md'}
            marginTop={4}
            alignSelf={'center'}            >
              Última Atualização: {today}
            </Text>
  
             </VStack>
            </Box>

          </VStack>
  
        </Box>
      </VStack>
    </VStack>


  )
}

