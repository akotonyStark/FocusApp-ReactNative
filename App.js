import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Button
        title='Click to login'
        style={{ backgroundColor: 'red' }}
      ></Button>
      <Text>Welcome to Focus App</Text>
      <View></View>
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
