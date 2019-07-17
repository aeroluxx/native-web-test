import React from 'react'
import { View } from 'react-native'
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick } from 'victory-native'
import { DATA } from '../../DATA'

const Chart = () => (
  <View style={{ backgroundColor: 'light-grey', flex: 1 }}>
    <VictoryChart domainPadding={{ x: 25 }} scale={{ x: 'time' }}>
      <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
      <VictoryAxis dependentAxis />
      <VictoryCandlestick candleColors={{ positive: 'green', negative: 'red' }} data={DATA} />
    </VictoryChart>
  </View>
)

export { Chart }
