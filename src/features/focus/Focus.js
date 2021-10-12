import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton'

export default function Focus({ addSubject }) {
  const [tempItem, setTempItem] = React.useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 10 }}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text)
            }}
          />
          <RoundedButton
            onPress={() => {
              addSubject(tempItem)
            }}
            size={50}
            title='+'
          ></RoundedButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    marginTop: 20,
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
