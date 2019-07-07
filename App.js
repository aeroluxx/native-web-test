import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Balance, Perfomance } from './screens'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B4A',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 25
  }
})

export default function App() {
  const { container } = styles
  return (
    <View style={container}>
      <Balance />
      <Perfomance />
    </View>
  )
}
