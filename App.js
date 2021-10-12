import React, { useState } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
// import Constants from 'expo-constants';
import Focus from './src/features/focus/Focus'

// You can import from local files
//import AssetExample from '/src/components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper'

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Timer goes here{focusSubject}</Text>
      ) : (
        <Focus addSubject={setFocusSubject}></Focus>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFC300',
    padding: 8,
  },
})
