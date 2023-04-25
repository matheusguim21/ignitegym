import { VStack, Text, Heading, HStack} from "native-base";


export function HomeHeader(){
  return(
    <HStack>

      <VStack>
        <Text color={'gray.100'} >Olá</Text>
        
        <Heading color={'gray.100'}>Matheus</Heading>
      </VStack>

    </HStack>

  )
}