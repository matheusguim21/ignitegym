import { Button as NativeBaseButton, IButtonProps } from "native-base";
import {Text} from 'native-base'
import { color } from "native-base/lib/typescript/theme/styled-system";
import { Children } from "react";
type Props = IButtonProps & {

  title:string;
  variant?: 'solid' | 'outline' | 'alternative';
}

export  function Button({title, variant = 'solid', ...rest}:Props){
  return(
    <NativeBaseButton
    width={348}
    bgColor={variant === 'solid'? 'green.700' : variant === 'outline'? 'transparent': 'blue.500'}
    borderWidth={variant === 'outline'? 1 : 0}
    borderColor={variant === 'outline'? 'green.700' : 'transparent'}
    height={14}
    rounded='sm'
    mb={10}

    _pressed={
     
      variant === 'outline'? {bgColor:"black"}: {bgColor: "transparent"}
      
    }
    
    {...rest}>
      <Text color={variant === 'outline' ? 'green.500' : 'white'} fontFamily={"heading"} fontSize='sm'
      >{title}</Text>
    </NativeBaseButton>
  )

}