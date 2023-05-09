import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { FlatList, HStack, Heading, VStack, Text } from "native-base"
import { useState } from "react"

export function Home(){
  const [groups, setGroups] = useState(['ombros', 'costas', 'bíceps','Tríceps']);
  const [groupSelected, setGroupSelected] = useState('costas');

  return(
    <VStack flex={1} >
     <HomeHeader/>
      

      <FlatList
      
      data={groups}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Group
        name={item}
        isActive={groupSelected === item}
        onPress={()=> setGroupSelected(item)}/>
      )}
      horizontal
      _contentContainerStyle={{px:8} }
      my={10}
      maxH={12}

      />
      
      <VStack mx={6}>
        <HStack justifyContent={"space-between"} my={4}>
          <Heading color={"gray.200"} fontSize={'md'} >
            Exercícios
          </Heading>
          <Text color={"gray.300"}>4</Text>
  
        </HStack>

        <ExerciseCard />
        <ExerciseCard/>
      </VStack>

    </VStack>


  )
}