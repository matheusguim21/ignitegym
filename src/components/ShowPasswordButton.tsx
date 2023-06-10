import {Center, Image, Button} from 'native-base'
import HideSVG from '@assets/icons/eye-crossed.svg'
import ShowSVG from '@assets/icons/eye.svg'
import {TouchableOpacity} from 'react-native'
type Props ={
  visible:boolean;
}

export function ShowPasswordButton({visible}:Props){
  return( 
    <Center>
      { visible ?
        <HideSVG
      fill={'#fff'}
      width={28}
      height={28}
    
      /> :
      <ShowSVG
      fill={'#fff'}
      width={28}
      height={28}
    
      />
    }
    </Center>
    
  )

}