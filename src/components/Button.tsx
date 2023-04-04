import { Button as NativeBaseButton, IButtonProps } from "native-base";
import {Text} from 'native-base'
type Props = IButtonProps & {

  title:string;
  variant?: 'solid' | 'outline';
}

export  function Button({title, variant = 'solid', ...rest}:Props){
  return(
    <NativeBaseButton
    width={348}
    bgColor={variant === 'outline' ? 'transparent' : 'green.700'}
    borderWidth={variant === 'outline'? 1 : 0}
    borderColor={variant === 'outline'? 'green.700' : 'transparent'}
    height={14}
    rounded='sm'
    mb={10}

    _pressed={
      variant === 'outline'? {bgColor:"gray.500"} : {bgColor: "transparent"}
    }
    
    {...rest}>
      <Text color={variant === 'outline' ? 'green.500' : 'white'} fontFamily={"heading"} fontSize='sm' >{title}</Text>
    </NativeBaseButton>
  )

}