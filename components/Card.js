import React, { memo } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 14,
    color: 'white'
  }
})


const Card = memo(({ title, onPress, horizontal, color }) => {
  const { container, h1 } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          container,
          { marginHorizontal: horizontal },
          { backgroundColor: color }
        ]}
      >
        <Text style={h1}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
})

export { Card }
