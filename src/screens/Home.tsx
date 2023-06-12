import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, HStack, Heading, VStack, Text, Image } from "native-base"
import { useState } from "react"
import  {AppNavigatorRoutesProps, AppRoutes} from '@routes/app.routes'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import LogoSocinpro from '@assets/logos/LogoSocinpro.png'


type RouteParams ={
  name:string,
  password:string
} 


export function Home(){
  
  const [groups, setGroups] = useState(['costas','ombros', 'bíceps','Tríceps']);
  const [groupSelected, setGroupSelected] = useState('costas');
  const [obras, setObras] = useState([
    {
      name:'Billie Jean',
      autor: 'Michael Jackson',
      image:'data:image/jpeg;base64,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'
    },
    {
      name:'Boiadeira',
      autor: 'Ana Castelo',
      image: 'https://cdns-images.dzcdn.net/images/cover/7d2709722700133afc08249412ee2a94/500x500.jpg'
    }
  ])

  const navigation = useNavigation<AppNavigatorRoutesProps>();


  function handleOpenExeciseDetails(item){
    navigation.navigate('exercise', {obra:item})
  }

  const route = useRoute()
  route.params


  return(
    <VStack flex={1} >
       <HomeHeader  name={route.params.name}/>
      <VStack bg={"gray.600"}>
        <Image 
        source={LogoSocinpro}
        width={40}
        height={32}
        alignSelf={'center'}
        alt="LogoSocinpro"
        />
      </VStack>
      
{/* 
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
      minH={12}
      maxH={12}

      />
       */}
      <VStack mx={6}>
        <HStack justifyContent={"space-between"} my={4}>
          <Heading color={"gray.200"} fontSize={'md'} >
            Obras
          </Heading>
          <Text color={"gray.300"}>{obras.length}</Text>
  
        </HStack>

       <FlatList
       data={obras}
       keyExtractor={item => item.name}
       renderItem={({item}) => (
        <ExerciseCard
        obra={item}
        onPress={()=> handleOpenExeciseDetails(item)}
        />
        
       )}
       
       />
      </VStack>
      

    </VStack>


  )
}

