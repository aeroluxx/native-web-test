import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
//import { Balance, Perfomance, Robots } from './screens'
import TestChart from './components/TestChart/TestChart'

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: '#242B4A'
  },
  container: {
    paddingTop: 35,
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
  const { container, containerScroll } = styles
  return (
    <TestChart />
    // <ScrollView style={containerScroll}>
    //   <View style={container}>
    //     <Balance />
    //     <Perfomance />
    //   </View>
    //   <Robots />
    //   <View style={{ height: 500 }} />
    // </ScrollView>
  )
}
