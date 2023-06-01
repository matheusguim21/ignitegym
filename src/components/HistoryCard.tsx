import { HStack, Heading, VStack, Text} from "native-base";



export function HistoryCard(){
  return(
    <HStack bg={'gray.600'} w={"full"} px={5} py={4} mb={3} alignItems={'center'} justifyContent={'space-between'} rounded={"md"} >
      <VStack mr={4} flex={1}  >
        <Heading textTransform={"capitalize"} color={'white'} numberOfLines={1}>
          Costas
        </Heading>

        <Text color={'gray.100'} fontSize={"lg"} numberOfLines={1}>
          Puxada frontal
        </Text>
        
      </VStack>

      <Text color={'gray.300'} fontSize={'md'} >
          09:10
      </Text>
    </HStack>
  )
}