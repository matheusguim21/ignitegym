import { HStack, VStack, Heading, Text } from "native-base";

type Props= {
  exercise:{
  name:string;
  region:string;
  time:string;
  }
}
export function HistoryCard({exercise}:Props){
  return (
    <HStack w={'full'} px={5} py={4} mb={3} bg={"gray.600"}>
      <VStack>
        <Heading color={'white'} textTransform={"capitalize"} fontSize={'md'}>
          {exercise.region}
        </Heading>

        <Text color={"gray.100"}  fontSize={'lg'} numberOfLines={1} >
          {exercise.name}
        </Text>

        <Text color={"gray.300"} fontSize={'md'}  alignSelf={'flex-start'}>
          {exercise.time}
        </Text>
      </VStack>
    </HStack>
  )
}