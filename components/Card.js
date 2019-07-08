import React, { memo, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'
import { Device } from '../constants'

const styles = StyleSheet.create({
  container: {
    ...Device.select({
      iphone5: {
        height: 50
      },
      mi5: {
        height: 60
      },
      iphone678: {
        height: 60
      },
      googlePixel: {
        height: 60
      },
      redmiNote5: {
        height: 60
      },
      web: {
        height: 70
      }
    }),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C3454',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 5
  },
  h1: {
    fontSize: 12,
    color: 'white'
  },
  logoStyle: {
    backgroundColor: '#27A2F8',
    borderRadius: 20,
    width: 40,
    height: 40
  }
})

const Card = memo(({ title, price }) => {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
    }).then(() => setFontLoaded(true))
  }, [])
  const { container, h1, logoStyle } = styles
  return fontLoaded ? (
    <View style={container}>
      <View style={logoStyle} />
      <Text style={[h1, { fontFamily: 'roboto-regular' }]}>{title}</Text>
      <Text style={[h1, { fontFamily: 'roboto-regular' }]}>{price}</Text>
    </View>
  ) : null
})

export { Card }
