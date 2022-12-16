import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const UserDetailsScreen = ({navigation}) => {

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
          navigation.replace("Welcome")
        })
        .catch( error => alert(error.message))
    
    }

  return (
    <View>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
            <Appbar.Content title="User Details" />
        </Appbar.Header>


        <Text>Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity
          style = {styles.button}
          onPress = {handleSignOut}
        >
          <Text style = {styles.buttonText}> 
            Sign out 
          </Text>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({

    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
})