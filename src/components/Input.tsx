import { IInputProps, Input as NativeBaseInput, FormControl, Center } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { THEME } from "../theme";

type Props= IInputProps &{
  errorMessage?: string | null ;
  signup?:boolean;
}


export function Input({errorMessage=null, isInvalid, signup, ...rest}:Props){

  const invalid = !!errorMessage || isInvalid

  return(
    <Center >
    <FormControl isInvalid={invalid} marginLeft={isInvalid? 0 : -2} >

      <FormControl.ErrorMessage marginRight={-3}  maxWidth={'77%'}   _text={{color:'red.600', paddingX:0, backgroundColor:'blue.800', maxWidth:'full'}}  >
        {errorMessage}
      </FormControl.ErrorMessage>
      <NativeBaseInput
        bgColor='gray.700'
        h={14}
        px={4}
        mt={4}
        borderWidth={0.2}
        fontSize={'md'}
        fontFamily='body'
        color='white'
        placeholderTextColor={THEME.colors.gray[200]}
        width={348}
        alignSelf={'flex-start'}
        _invalid={{
          borderColor:'red.600',
          borderWidth:1,
          margin:0,
          
      
          
        }}
        
        
        _focus={{
          // bgColor:'gray.600',
          borderWidth:1,
          borderColor: signup ?  'green.500': 'gray.200'
        }}
        
        {...rest}
      />

    </FormControl>
    </Center>
  )
}