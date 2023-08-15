import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { FlatList, HStack, Heading, VStack, Text } from "native-base";
import { useState } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState([
    "costas",
    "ombros",
    "bíceps",
    "Tríceps",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");
  const [exercises, setExercises] = useState([
    {
      name: "Remada unilateral",
      serie: "3 séries x 2 repetições",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg",
    },
    {
      name: "Puxada frontal",
      serie: "4 séries x 5 repetições",
      image:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/execu%C3%A7%C3%A3o-do-puxador-frente.jpg",
    },
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExeciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        _contentContainerStyle={{ px: 8 }}
        my={10}
        minH={12}
        maxH={12}
      />

      <VStack mx={6}>
        <HStack justifyContent={"space-between"} my={4}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercíciofa
          </Heading>
          <Text color={"gray.300"}>4</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExerciseCard exercise={item} onPress={handleOpenExeciseDetails} />
          )}
        />
      </VStack>
    </VStack>
  );
}
