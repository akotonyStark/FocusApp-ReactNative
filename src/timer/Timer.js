import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {ProgressBar} from 'react-native-paper'
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';
import Countdown from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import {Timing} from './timing'

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = React.useState(false);
  const [progress, setProgress] = React.useState(1)
  const [minutes, setMinutes] = React.useState(0.1)

  const onProgress = (progress) => {
    setProgress(progress)
  }

 const changeTime = (min) => {
   setMinutes(min)
 }
  React.useEffect(() => {
    //console.log(isStarted)
    return () => {
      //cleanup
    };
  }, [isStarted]);

  return (
    <View style={styles.container}>
      <Countdown isStarted={isStarted} onProgress = {onProgress}/>
      <View>      
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}> {focusSubject} </Text>
        <ProgressBar progress = {progress} color = "#5E84E2" style={{height: 20, marginTop: 20}} />
      </View>
      <View>
          <Timing onChangeTime = {changeTime}/>
      </View>
      <View>
        <View style={styles.actions}>
          {isStarted ? (
            <RoundedButton
              title="Pause"
              onPress={() => {
                setIsStarted(false);
              }}
            />
          ) : (
            <RoundedButton
              title="Play"
              onPress={() => {
                setIsStarted(true);
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
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
});
