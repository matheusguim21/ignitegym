import { HistoryCard } from "@components/HistoryCard"
import { ScreenHeader } from "@components/ScreenHeader"
import {Center, FlatList, SectionList, Text, VStack} from "native-base"

import {useState} from 'react'
export function History(){

  const [exercises, setExercises] = useState([{name:'Prancha isométrica', region:'ombro', time:'08:50'},{name:'Prancha isométrica', region:'ombro', time:'08:50'}]);


  const [exerciseSection, setExerciseSection] = useState([{
    title: exercises.forEach(exercises => exercises.time),
    data: exercises.forEach(exercises => [exercises.name])
  }])
  return(
    <VStack  flex={1}>
      <ScreenHeader title="Histórico de exercícios"/>
      
     <SectionList
     sections={exerciseSection}
     keyExtractor={item => item}
     />
    </VStack >


  )
}