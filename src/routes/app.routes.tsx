import {Platform} from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Box, Center, useTheme, Text } from "native-base";
import { Home } from "@screens/Home";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'
import {useRoute} from '@react-navigation/native'

type AppRoutes ={
  exercise: {
    obra:{
      name:string
      autor:string
      image:string
    }
  }
  history:undefined
  home:{
    name:string
    password:string
    email?:string
    photo:string
  }
  profile:{
    name:string
    password:string
    photo?:string
    email?:string
  }
  }

  

  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>()


export function AppRoutes(){
  
  const {sizes, colors} = useTheme()
  
  const iconSize = sizes[7]
  
  const route = useRoute()
  route.params
  return(

    <Navigator  initialRouteName='home' screenOptions={{
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
      name="history"
      component={History}
      options={{tabBarIcon:({color})=>(

        <Box  // envolve o icone para dar uma area de toque maior do que a do icone
        width={24}
        height={12}
        alignContent={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={-5}
        ><HistorySvg fill={color} width={iconSize} height={iconSize}/>
        <Text
          color={'white'}
          fontSize={'xs'}
          >Histórico</Text>
        </Box
       >
      )}}
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
      <Screen
      name="exercise"
      component={Exercise}
      options={{
        tabBarButton:()=> null
      }}
      />
    </Navigator>

  )
}