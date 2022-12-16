import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-paper'


export const WeightTrackerScreen = ({ navigation }) => {

  const [weightInput, setWeightInput] = useState('');


  const data = [
    {
      weight: '100kg'
    },
    {
      weight: '90kg',
    },
  ]

  const saveWeight = (value) => {
    console.log(data)
    data.push({weight: value})
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
        <Text>WeightTrackerScreen</Text>
        <View style = {styles.formContainer}>
          <Text>
            Weight
          </Text>
          <TextInput
            style={styles.input}  
            placeholder = 'Enter Weight'
            onChangeText={x=>setWeightInput(x)}
            value = {weightInput}
            keyboardType = 'Numeric'
          />
        
          <TouchableOpacity
           style = {styles.button}
           onPress = {() => saveWeight(weightInput)}>
            <Text>
              Submit
            </Text>
          </TouchableOpacity>
          </View>
          <Divider bold style={{padding: 1, width: '80%', margin: 10}}/>
          <View style = {styles.listContainer}>  
            <FlatList
              data={data}
              renderItem={({item}) => <Text style={styles.item}>{item.weight}</Text>}
              />
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { 
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
  },
  formContainer: {
    width: '80%',
    padding: 30,
  },
  listContainer: {
    width: '80%',
    padding: 30,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
},    
  button: {
  backgroundColor: '#0782F9',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 5
}
})
