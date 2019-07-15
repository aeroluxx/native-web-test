import React, { Component } from 'react'
import { View } from 'react-native'
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick } from 'victory-native'
import { DATA } from './DATA'

export default class PieChart extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'light-grey', flex: 1 }}>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 25 }} scale={{ x: 'time' }}>
          <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
          <VictoryAxis dependentAxis />
          <VictoryCandlestick candleColors={{ positive: '#5f5c5b', negative: '#c43a31' }} data={DATA} />
        </VictoryChart>
      </View>
    )
  }
}
