import React, { useState } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
// import Constants from 'expo-constants';
import Focus from './src/features/focus/Focus'
import { fontSizes, paddingSizes } from './src/utils/sizes'
import { colors } from './src/utils/colors'
import { Timer } from './src/timer/timer'

// You can import from local files

import { Card } from 'react-native-paper'

export default function App() {
  const [focusSubject, setFocusSubject] = useState('some task')
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
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
    backgroundColor: colors.primary,
    padding: paddingSizes.sm,
  },
})
