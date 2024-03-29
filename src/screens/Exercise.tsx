import { TouchableOpacity } from "react-native";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useToast,
  VStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";
import { useCallback, useEffect, useState } from "react";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { Loading } from "@components/Loading";
import { ExercisesDTO } from "@dtos/ExerciseDTO";

type RouteParamsProps = {
  exerciseId: string;
};
export function Exercise() {
  const toast = useToast();
  const [exercise, setExercise] = useState<ExercisesDTO>({} as ExercisesDTO);
  const [isLoading, setIsLoading] = useState(false);
  const [sendingRegister, setSendingRegister] = useState(false);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const { exerciseId } = route.params as RouteParamsProps;


  console.log("ID exercicio: ", exerciseId);

  function handleGoBack() {
    navigation.goBack();
  }
  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      console.log(response.data)
      setExercise(response.data);

      
      
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício";
      toast.show({
        title,
        placement: "top",
        backgroundColor: "red.500",
      });
    } finally {
      setIsLoading(false)
      setSendingRegister(false);
    }
  }

  async function handleExerciseHistoryRegister() {
    try{
      setSendingRegister(true)
      await api.post("/history",{
        exercise_id:exerciseId
      })
      toast.show({
        title:"Exercício registrado com sucesso",
        backgroundColor:"green.500 ",
        duration:1000,
        placement:"top"
      })
    }catch(error){
      const isAppError = error instanceof AppError;
      const title = isAppError? error.message : "Não foi possível resgistrar o exercício"

      toast.show({
        title,
        backgroundColor:"red.500",
        duration:2000,
        placement:'top'
      })
      console.log(error);
      
    }finally{
      
      setSendingRegister(false)
    }
    
  }
  
  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);
  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={16}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        {isLoading ? (
          null
        ) : (
          <HStack
            justifyContent="space-between"
            mt={4}
            mb={8}
            alignItems="center"
          >
            <Heading
              color="gray.100"
              fontSize="lg"
              flexShrink={1}
              fontFamily="heading"
            >
              {exercise.name}
            </Heading>

            <HStack alignItems="center">
              <BodySvg />

              <Text color="gray.200" ml={1} textTransform="capitalize">
                {exercise.group}
              </Text>
            </HStack>
          </HStack>
        )}
      </VStack>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack p={8}>
          <Box rounded={"md"}>
            <Image
              w="full"
              h={80}
              source={{
                uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
              }}
              alt="Nome do exercício"
              mb={3}
              resizeMode="cover"
              rounded="lg"
            />
          </Box>

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />

                <Text color="gray.200" ml="2">
                  {exercise.series} séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />

                <Text color="gray.200" ml="2">
                  {exercise.repetitions} repetições
                </Text>
              </HStack>
            </HStack>

            <Button 
            isLoading={sendingRegister}
            title="Marcar como realizado"
            onPress={handleExerciseHistoryRegister} />
          </Box>
        </VStack>
      )}
    </VStack>
  );
}
