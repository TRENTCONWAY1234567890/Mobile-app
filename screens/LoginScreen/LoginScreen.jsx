import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { Divider } from 'react-native-paper'

import { selectUserID } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'

// TODO  better handling of error states (helper text)
// GET user and put it in user state


export const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    },[])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredenutals => {
            const user = userCredenutals.user;
            dispatch(setID(user.ID))
            console.log(selectUserID);
        })
        .catch( error => {
            alert(error.message);
            console.log(error);
        })
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.LogoContainer}>
            <Text>LOGO HERE</Text>
        </View>
        <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
                placeholder='Email'
                value={ email }
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <View style={{marginTop: 15}}>
                <Text>Password</Text>
                <TextInput
                    placeholder='Password'
                    value={ password }
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
        </View>
        <View style={[styles.inputContainer, styles.buttonContainer]}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>

        <Divider bold style={{padding: 1, width: '100%', margin: 10}}/>
        <Button style={styles.buttonOutlineText}
            title='sign up'
            onPress={() => navigation.navigate("Register")}>
            
        </Button>
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