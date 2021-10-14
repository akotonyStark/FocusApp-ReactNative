import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const minutesToMillis = (min) => min * 1000 * 60
const formatTime = (time) => (time < 10 ? `0${time}` : time)

export default function Countdown({ minutes, isStarted, onProgress }) {

  const [millis, setMillis] = React.useState(minutesToMillis(minutes))

  let minute = Math.floor(millis / 1000 / 60) % 60
  let seconds = Math.floor(millis / 1000) % 60

  const interval = React.useRef(null)

  const countdown = () => {
    if (isStarted) {
      setMillis((millis) => {
        if (millis === 0) {
          //do stuff
          return millis
        }
        const timeLeft = millis - 1000

        onProgress((timeLeft/ minutesToMillis(minutes)))
        return timeLeft
      })
    }
  }

  React.useEffect(() => {    
    console.log(millis, minutes)
    
  }, [millis, minutes])

  React.useEffect(() => {
    if(!isStarted){
      if(interval.current){
        clearInterval(interval.current)
      }
      return
    }
    interval.current = setInterval(countdown, 1000)  
    return () => clearInterval(interval.current)
  }, [isStarted, countdown])

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.text}>
        {formatTime(minute)} : {formatTime(seconds)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(94,132,226,0.3)',
    marginBottom: 20,
    width: '100%',
  },
})
