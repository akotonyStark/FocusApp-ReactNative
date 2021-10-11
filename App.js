import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Dummy from './components/Dummy'

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {isLoggedIn ? (
        <Dummy />
      ) : (
        <Button
          title='Click to login'
          style={{ backgroundColor: 'red' }}
          onPress={() => {
            setisLoggedIn(true)
          }}
        ></Button>
      )}
      <Text>Welcome to Focus App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
