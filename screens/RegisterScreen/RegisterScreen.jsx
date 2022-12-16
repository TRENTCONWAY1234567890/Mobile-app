import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { Divider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { setID, selectUserID } from '../../redux/userSlice'

// show password strength on focus - if there are no errors
// show and hide password on fields

export const RegisterScreen = ({ navigation }) => {
   
    const dispatch = useDispatch()
    const UserID = useSelector(state => state.user.ID);

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

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentals => {
            const user = userCredentals.user;
            console.log(user.uid);
            const tre = useSelector(state => state.user.ID);
            console.log('something: ', {tre} );
            dispatch(setID(user.uid));
            const abc = useSelector(state => state.user.ID);
            console.log('something: ', {abc} );
        })
        .catch( error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <Text>RegisterScreen</Text>

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
                onPress={() => dispatch(setID("Test"))}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    {UserID}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleSignUp}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Sign Up
                </Text>
            </TouchableOpacity>

        <Divider bold style={{padding: 1, width: '100%', margin: 10}}/>
        <Button style={styles.buttonOutlineText}
            title='Log in'
            onPress={() => navigation.navigate("Login")}>
            
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

