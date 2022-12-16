import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123", 
        title: "Log Weight",
        image: "https://links.papareact.com/3pm",
        screen: "WeightTracker"
    },
    {
        id: "456",
        title: "Daily crunch",
        image: "https://links.papareact.com/3pm",
        screen: "RecordExercise"
    },
]

const ChallengeOptions = () => {

  const navigation = useNavigation()

  return (
    <FlatList
        data={data}
        horizontal
        style = {{height: '10%'}}
        renderItem={({ item }) => (
            <TouchableOpacity
                style={{
                    padding:5, 
                    paddingLeft: 30,
                    paddingBottom: 40, 
                    paddingTop: 20, 
                    backgroundColor: "grey", 
                    margin: 10,
                    width: 180,
                    height:180,
                    borderRadius:15
                }}
                onPress = {() => navigation.navigate(item.screen)}
            >
                <View style = {{
                    width:120, 
                    height:120,
                }}
                >
                    <Text>NiceImage</Text>
                </View>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    
    }
    />
  )
}

export default ChallengeOptions