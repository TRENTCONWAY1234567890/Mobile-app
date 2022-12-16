import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Button } from 'react-native'
import React from 'react'

import { Divider } from 'react-native-paper'





export const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        < Image source={require('../../assets/image/browser.png')} style={[styles.LogoContainer, {resizeMode: 'contain'}]}/>
        <View style={styles.LogoContainer}>
            <Text>LOGO HERE</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
        <View/>
        <Divider bold style={{padding: 1, width: '100%', margin: 10}}/>
        <Button style={styles.buttonOutlineText}
            title='sign up'
            onPress={() => navigation.navigate("Register")}>
            
        </Button>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    LogoContainer: {
        width: '80%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginTop: 80,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop :40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2, 
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})