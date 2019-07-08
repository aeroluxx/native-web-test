import React, { memo, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'
//import { Device } from '../constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    //backgroundColor: '#2C3454',
    width: 230,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#27A2F8',
    marginRight: 10
  },
  subContainer: {
    flex: 2,
    alignItems: 'flex-start',
    marginVertical: 5
  },
  h1: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5
  },
  h2: {
    fontSize: 12,
    color: 'white'
  },
  h3: {
    fontSize: 11,
    color: '#6987B9',
    marginBottom: 10
  },
  chartStyle: {
    flex: 2,
    backgroundColor: '#6987B9',
    width: 40,
    height: 40
  }
})

const CardRobot = memo(({ title, price }) => {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
    }).then(() => setFontLoaded(true))
  }, [])
  const { container, h1, h2, h3, subContainer, chartStyle } = styles
  return fontLoaded ? (
    <View style={container}>
      <View style={subContainer}>
        <Text style={[h1, { fontFamily: 'roboto-regular' }]}>{title}</Text>
        <Text style={[h2, { fontFamily: 'roboto-regular' }]}>{price}</Text>
        <Text style={[h3, { fontFamily: 'roboto-regular' }]}>{price}</Text>
        <Text style={[h2, { fontFamily: 'roboto-regular' }]}>{price}</Text>
        <Text style={[h3, { fontFamily: 'roboto-regular' }]}>{price}</Text>
      </View>
      <View style={chartStyle} />
    </View>
  ) : null
})

export { CardRobot }
