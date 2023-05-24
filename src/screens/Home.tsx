import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { FlatList, HStack, Heading, VStack, Text } from "native-base"
import { useState } from "react"

export function Home(){
  const [groups, setGroups] = useState(['costas', 'ombros', 'bíceps','Tríceps']);
  const [groupSelected, setGroupSelected] = useState('costas');
  const [exercises, setExercises] = useState([{name:'Prancha isométrica', serie:'3 series x 12 repetições', imagem:'https://www.smartfit.com.br/news/wp-content/uploads/2020/09/prancha.jpg'}, {name:'Agachamento no banco', serie:'3 series x 12 repetições',imagem:'https://www.smartfit.com.br/news/wp-content/uploads/2020/09/agachamento-no-banco-perda-de-for%C3%A7a-muscular-e-envelhecimento.jpg'}]);

  return(
    <VStack flex={1} >
     <HomeHeader/>
      

      <FlatList
      
      data={groups}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Group
        name={item}
        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
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
          <Text color={"gray.300"}>{exercises.length}</Text>
  
        </HStack>

        <FlatList
        data={exercises}
        keyExtractor={item => item.name}
        renderItem={({item})=>
          <ExerciseCard
          exercise={item}  />
      }
        showsVerticalScrollIndicator={false}
        
        />
        
      </VStack>

    </VStack>


  )
}