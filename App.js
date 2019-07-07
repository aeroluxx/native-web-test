import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B4A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default function App() {
  const { container } = styles
  return (
    <View style={container}>
      <Card color="#2C3454" horizontal={25} title="Card1" />
      <Card color="#2C3454" horizontal={25} title="Card1" />
    </View>
  )
}
