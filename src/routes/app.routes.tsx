import {Platform} from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Box, Center, useTheme, Text } from "native-base";
import { Home } from "@screens/Home";
import { Obra } from "@screens/Obras";
import { Profile } from "@screens/Profile";

import HomeSvg from '@assets/home.svg'
import FonogramaSvg from '@assets/fonograma1.svg'
import ProfileSvg from '@assets/profile.svg'
import {useRoute} from '@react-navigation/native'
import { Fonogramas } from '@screens/Fonogramas';

type AppRoutes ={

  home:{
    name:string
    password:string
    email?:string
    photo:string
  },
  fonogramas:undefined;
  profile:{
    name:string
    password:string
    photo?:string
    email?:string
  }

  Card:{

    obra:{name:string;
    autor:string;
    image:string;
    ano:string;
    codigo:string;
}}
  }

  

  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>()


export function AppRoutes(){
  
  const {sizes, colors} = useTheme()
  
  const iconSize = sizes[7]
  
  const route = useRoute()
  route.params
  return(

    <Navigator   screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor:colors.gray[200],
      tabBarStyle:{
        backgroundColor:colors.gray[600],
        borderTopWidth:0,
        height: Platform.OS === 'android'? 'auto': 96,
        paddingBottom:sizes[10],
        paddingTop:sizes[6],
        
      }
    }} >
      <Screen
      initialParams={route.params}
      name="home"
      component={Home}
      options={{
        
        tabBarIcon:({color})=> (
          <Box   // envolve o icone para dar uma area de toque maior do que a do icone
          width={24}
          height={12}
          alignContent={'center'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={-5}
          >
          <HomeSvg fill={color} width={iconSize} height={iconSize}
          
          />
          <Text
          color={'white'}
          fontSize={'xs'}
          >Home</Text>
          </Box>
        )
      }}
      
      />
      <Screen
      name="fonogramas"
      component={Fonogramas}
      options={{tabBarIcon:({color})=>(

        <Box  // envolve o icone para dar uma area de toque maior do que a do icone
        width={24}
        height={12}
        alignContent={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={-5}
        ><FonogramaSvg fill={color} width={'100%'} height={iconSize}/>
        <Text
          color={'white'}
          fontSize={'xs'}
          >Fonogramas</Text>
        </Box>
      )}}
      />
    <Screen
      name="Card"
      component={Obra}
      options={{
        tabBarButton:()=> null
      }}
      />

      <Screen
      name="profile"
      component={Profile}
      initialParams={route.params}
      options={{tabBarIcon:({color})=>(
        <Box // envolve o icone para dar uma area de toque maior do que a do icone
        width={24}
        height={12}
        alignContent={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={-5}
        ><ProfileSvg fill={color} width={iconSize} height={iconSize}/>
        <Text
          color={'white'}
          fontSize={'xs'}
          >Perfil</Text></Box>
      )}}
      />
      
    </Navigator>

  )
}