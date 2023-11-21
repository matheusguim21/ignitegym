import { useCallback, useState } from 'react';
import { Heading, VStack, SectionList, Text, useToast } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { useFocusEffect } from '@react-navigation/native';
import { ExercisesDTO } from '@dtos/ExerciseDTO';
import { HistoryByDayDTO } from '@dtos/HistoryByDAyDTO';

export function History() {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([])

  async function fetchHistory(){
    
    try{
      setIsLoading(true)
      const response = await api.get("/history")
      setExercises(response.data)

    }catch(error){
      const isAppError = error instanceof AppError
      const title = isAppError? error.message : "Não foi possível carregar o histórico"
      
      toast.show({
        title,
        backgroundColor:"red.500",
        duration:1500,
        placement:"top"
      })

    }finally{
      setIsLoading(false)
    }
  }
  useFocusEffect(useCallback(()=>{
    fetchHistory();
  },[]))

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico' />

      <SectionList 
        sections={exercises}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HistoryCard
          data={item}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3} fontFamily="heading">
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />

    </VStack>
  );
}