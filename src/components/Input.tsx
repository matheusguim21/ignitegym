import { IInputProps, Input as NativeBaseInput } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { THEME } from "../theme";




export function Input({...rest}:IInputProps){
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
      width={348}
      
      _focus={{
        // bgColor:'gray.600',
        borderWidth:1,
        borderColor:'gray.400',
        borderBottomColor:'green.500'
      }}
      
      {...rest}
    />
  )
}