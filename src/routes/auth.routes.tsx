import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Exercise } from '@screens/Obras';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
import { AppRoutes } from './app.routes';

type AuthRoutes ={
  signIn:undefined
  signUp:undefined
  main:{
    name:string;
    password?:string
    email?:string
  }

}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return(
  <Navigator screenOptions={{headerShown:false, animation:'simple_push', statusBarTranslucent:true}} initialRouteName='signIn' >
      <Screen
      name='signIn'
      component={SignIn}      
      
      />
      <Screen
      name='signUp'
      component={SignUp}      
      />
      <Screen
      name='main'
      component={AppRoutes}      
      />
      
    </Navigator>

  )
}

