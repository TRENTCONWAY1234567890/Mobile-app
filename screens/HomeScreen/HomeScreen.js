import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


import ChallengeOptions from './ChallengeOptions'
import ProfileBanner from './ProfileBanner'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';

import { User } from './User'



export const HomeScreen = ({navigation}) => {
  return(
    <SafeAreaView style ={styles.container}>
              <User/>
        <View style={styles.HeaderContainer}>

           <Text style={styles.LogoContainer}>
            LOGO HERE
          </Text>
          <TouchableOpacity
             onPress={() => navigation.navigate("UserDetails")}>
             <Avatar.Text size={30} label="XD" />
          </TouchableOpacity>
          </View>

       <ProfileBanner/>


       <ChallengeOptions/>
    </SafeAreaView>

  );
  }



  // return (
  //     <SafeAreaView style ={styles.container}>
  //       <View style={styles.HeaderContainer}>

  //           <Text style={styles.LogoContainer}>
  //             LOGO HERE
  //           </Text>
  //           <TouchableOpacity
  //             onPress={() => navigation.navigate("UserDetails")}>
  //             <Avatar.Text size={30} label="XD" />
  //           </TouchableOpacity>
  //         </View>

  //       <ProfileBanner/>


  //       <ChallengeOptions/>

  //     </SafeAreaView>
  // )
//}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeaderContainer: { 
    alignItems: 'center'
  },
  LogoContainer: {
    padding: 20,
  },
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