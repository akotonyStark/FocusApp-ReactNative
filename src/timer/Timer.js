import React from 'react';
import { View, StyleSheet, Text, Button, Vibrate, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';
import Countdown from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './timing';
import {useKeepAwake} from 'expo-keep-awake';

export const Timer = ({ focusSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = React.useState(false);
  const [progress, setProgress] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0.05);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onEnd = () => {
    vibrate()
    setMinutes(1);
    setProgress(0.5);
    setIsStarted(false);
  }

  const vibrate = () => {
    if(Platform.OS === 'ios'){
const interval = setInterval(() => Vibration.vibrate(), 1000)
setTimeout(() => clearInterval((interval), 10000))
    }
    else{
      Vibration.vibrate('10s')
    }
  }

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  React.useEffect(() => {
    console.log(minutes, isStarted);
    return () => {
      //cleanup
    };
  }, [minutes, isStarted]);

  return (
    <View style={styles.container}>
      <Countdown
        isStarted={isStarted}
        onProgress={onProgress}
        minutes={minutes}
        onEnd = {onEnd}
      />
      <View>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}> {focusSubject} </Text>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 20, marginTop: 20 }}
        />
      </View>
      <View>
        <Timing onChangeTime={changeTime} />
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
    marginTop: 30,
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
