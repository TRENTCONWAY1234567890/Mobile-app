import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileBanner = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileBanner</Text>
    </View>
  )
}

export default ProfileBanner

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey', 
        width: '95%',
        borderRadius: 15, 
        paddingTop:30, 
        paddingBottom:90,
        paddingLeft: 10,
        margin: 10
    }
})