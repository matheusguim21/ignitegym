import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import {THEME} from './src/theme'
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { AuthRoutes } from '@routes/auth.routes';
import { LogBox } from "react-native"


LogBox.ignoreLogs([
'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
])


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  

  return (  

    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle={'light-content'}
      backgroundColor='transparent'
      translucent/>
      { fontsLoaded ? <Routes/> : <Loading/>   }
    </NativeBaseProvider>
  );
}

