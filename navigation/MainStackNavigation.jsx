import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    WeightTrackerScreen,
    RecordExerciseScreen,
    UserDetailsScreen,
    WelcomeScreen,
    LoginScreen,
    HomeScreen, 
    RegisterScreen
} from '../screens';

import { ScreenNames } from './screenNames'

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" >
      <Stack.Screen 
        name='Welcome'
        component={WelcomeScreen} 
        options={{headerShown: false}}
        />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        />
      <Stack.Screen 
        name="UserDetails" 
        component={UserDetailsScreen} 
        />
      <Stack.Screen 
        name="WeightTracker" 
        component={WeightTrackerScreen} 
        />
      <Stack.Screen 
        name="RecordExercise" 
        component={RecordExerciseScreen} 
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStackNavigation