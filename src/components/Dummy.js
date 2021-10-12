import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function Dummy() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>{count}</Text>

      <Button
        title='Increment Counter'
        style={{ color: 'red' }}
        onPress={() => {
          setCount(count + 1)
          console.log(count)
        }}
      ></Button>
      <Text>This is our dummy page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Dummy
