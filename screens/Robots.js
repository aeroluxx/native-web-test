import React, { memo, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'
import { CardRobot } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginTop: 25
  },
  h1: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start'
  }
})

const Robots = memo(() => {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf')
    }).then(() => setFontLoaded(true))
  }, [])
  const { container, h1 } = styles
  return fontLoaded ? (
    <View style={container}>
      <Text style={[h1, { fontFamily: 'roboto-medium' }]}>Robots</Text>
      <CardRobot title="Robot1" price="456453.0788 BTC" />
      <CardRobot title="Robot2" price="456453.0788 BTC" />
      <CardRobot title="Robot3" price="456453.0788 BTC" />
      <CardRobot title="Robot4" price="456453.0788 BTC" />
    </View>
  ) : null
})

export { Robots }
