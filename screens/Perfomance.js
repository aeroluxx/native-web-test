import React, { memo, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'
import { Device } from '../constants'
import { Chart } from '../components/Chart/Chart'

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
    //paddingHorizontal: 15
  },
  h1: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start'
  },
  chartStyle: {
    ...Device.select({
      iphone5: {
        height: 200
      },
      mi5: {
        height: 200
      },
      iphone678: {
        height: 200
      },
      googlePixel: {
        height: 200
      },
      redmiNote5: {
        height: 200
      },
      web: {
        height: 230
      }
    }),
    width: '100%',
    borderWidth: 1,
    borderColor: 'white'
  }
})

const Perfomance = memo(() => {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf')
    }).then(() => setFontLoaded(true))
  }, [])
  const { container, h1, chartStyle } = styles
  return fontLoaded ? (
    <View style={container}>
      <Text style={[h1, { fontFamily: 'roboto-medium' }]}>Perfomance</Text>
      <View style={chartStyle}>
        <Chart />
      </View>
    </View>
  ) : null
})

export { Perfomance }
