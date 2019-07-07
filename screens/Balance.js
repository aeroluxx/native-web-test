import React, { memo, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'
import { Device } from './constants'
import { Card } from '../components/Card'

const styles = StyleSheet.create({
  container: {
    ...Device.select({
      iphone5: {
        width: '100%'
      },
      mi5: {
        width: '100%'
      },
      iphone678: {
        width: '100%'
      },
      googlePixel: {
        width: '100%'
      },
      redmiNote5: {
        width: '100%'
      },
      web: {
        width: '48%'
      }
    }),
    justifyContent: 'center',
    alignItems: 'center'
    //backgroundColor: '#2C3454',
    // paddingHorizontal: 15
  },
  h1: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start'
  }
})

const Balance = memo(() => {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf')
    }).then(() => setFontLoaded(true))
  }, [])
  const { container, h1 } = styles
  return fontLoaded ? (
    <View style={container}>
      <Text style={[h1, { fontFamily: 'roboto-medium' }]}>Balance</Text>
      <Card title="Bitcoin" price="45678.0987 BTC" />
      <Card title="Bitcoin" price="45678.0987 BTC" />
      <Card title="Bitcoin" price="45678.0987 BTC" />
    </View>
  ) : null
})

export { Balance }
