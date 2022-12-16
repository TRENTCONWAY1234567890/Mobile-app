import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Appbar } from 'react-native-paper';

export const RecordExerciseScreen = ({ navigation }) => {

  return (
    <View>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
            <Appbar.Content title="Record Exercise" />
        </Appbar.Header>
        <Text>RecordExerciseScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})