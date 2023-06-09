import { Pressable, Text, IPressableProps, HStack} from "native-base"

type Props = IPressableProps & {
  name:string;
  isActive: boolean;

}

export function Group({name, isActive, ...rest}:Props){
  return(
  
      <Pressable
      my={2}
      mr={3}
      w={24}
      h={10}
      bg={"gray.600"}
      rounded={"md"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
      isPressed={isActive}
      _pressed={{
        borderWidth:"1",
        borderColor:'green.500'
      }}

      {...rest}
      >
        <Text 
        color={"gray.200"}
        textTransform={"uppercase"}
        fontSize={"xs"}
        fontWeight={"bold"}
        >
          {name}
        </Text>
    
      </Pressable>
    
  )
}