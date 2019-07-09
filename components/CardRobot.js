import React, { memo, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'
import { Device } from '../constants'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#27A2F8',
    marginRight: 10
  },
  subContainer: {
    ...Device.select({
      web: {
        flexDirection: 'row'
      }
    }),
    flex: 7,
    alignItems: 'flex-start',
    marginVertical: 5,
    flexWrap: 'wrap'
  },
  subText: {
    alignItems: 'flex-start',
    flex: 2
  },
  h1: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5
  },
  h2: {
    fontSize: 12,
    color: 'white'
    //backgroundColor: 'gold'
  },
  h3: {
    fontSize: 11,
    color: '#6987B9',
    marginBottom: 10
  },
  chartStyle: {
    ...Device.select({
      iphone5: {
        flex: 6
      },
      mi5: {
        flex: 6
      },
      iphone678: {
        flex: 6
      },
      googlePixel: {
        flex: 6
      },
      redmiNote5: {
        flex: 6
      },
      web: {
        flex: 2
      }
    }),
    backgroundColor: '#6987B9',
    width: 10,
    height: 50
  }
})

const CardRobot = memo(({ title, price }) => {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
    }).then(() => setFontLoaded(true))
  }, [])
  const { container, h1, h2, h3, subContainer, chartStyle, subText } = styles
  return fontLoaded ? (
    <View style={container}>
      <View style={subContainer}>
        <View style={subText}>
          <Text style={[h1, { fontFamily: 'roboto-regular' }]}>{title}</Text>
        </View>
        <View style={subText}>
          <Text style={[h2, { fontFamily: 'roboto-regular' }]}>{price}</Text>
          <Text style={[h3, { fontFamily: 'roboto-regular' }]}>{price}</Text>
        </View>
        <View style={subText}>
          <Text style={[h2, { fontFamily: 'roboto-regular' }]}>{price}</Text>
          <Text style={[h3, { fontFamily: 'roboto-regular' }]}>{price}</Text>
        </View>
        <View style={subText}>
          <Text style={[h2, { fontFamily: 'roboto-regular' }]}>{price}</Text>
          <Text style={[h3, { fontFamily: 'roboto-regular' }]}>{price}</Text>
        </View>
      </View>
      <View style={chartStyle} />
    </View>
  ) : null
})

export { CardRobot }
