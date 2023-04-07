import { IInputProps, Input as NativeBaseInput } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { THEME } from "../theme";
import {TextInputMaskProps} from "react-native-masked-text"

type InputProps = IInputProps & 
{
  variant?:'default' |'CPF' |'SOC'

}


export function Input({variant ='default', ...rest}:InputProps){
  return(
    <NativeBaseInput
      bgColor='gray.700'
      h={14}
      px={4}
      mb={4}
      borderWidth={0}
      fontSize={'md'}
      fontFamily='body'
      color='white'
      placeholderTextColor={THEME.colors.gray[300]}
      width={variant === 'CPF'? 175 : variant === 'SOC'? 150: 348}
      
      _focus={{
        // bgColor:'gray.600',
        borderWidth:1,
        borderColor:'green.500',
      }}
      
      {...rest}
    />
  )
}