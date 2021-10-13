import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes } from '../utils/sizes'
import Countdown from '../components/Countdown'
import { RoundedButton } from '../components/RoundedButton'

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = React.useState(false)

  React.useEffect(() => {
    console.log(isStarted)
    return () => {
      //cleanup
    }
  }, [isStarted])

  return (
    <View style={styles.container}>
      <Countdown isStarted={isStarted} />
      <View>
        {' '}
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}> {focusSubject} </Text>
        <View style={styles.actions}>
          {isStarted ? (
            <RoundedButton
              title='Pause'
              onPress={() => {
                setIsStarted(false)
              }}
            />
          ) : (
            <RoundedButton
              title='Play'
              onPress={() => {
                setIsStarted(true)
              }}
            />
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  actions: {
    alignItems: 'center',
    marginTop: 20,
  },
})
