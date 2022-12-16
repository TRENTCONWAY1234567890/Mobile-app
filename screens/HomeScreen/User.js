import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setID } from '../../redux/userSlice';


export function User() {
  const UserID = useSelector((state) => state.user.ID)
  const dispatch = useDispatch();
  return (
    <View>
      <View>
        <Button
          aria-label="Increment value"
          onPress={() => dispatch(setID('somethingelse'))}
          title="Something Else"
        />
        <Text>{UserID}</Text>
        <Button
          aria-label="Decrement value"
          onPress={() => dispatch(setID('test1234'))}
          title="Test 123"
        />
      </View>
    </View>
  )
}