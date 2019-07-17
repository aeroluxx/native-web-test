import React from 'react'
import { View } from 'react-native'
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick } from 'victory'
import { DATA } from '../../DATA'

const Chart = () => (
  <View style={{ backgroundColor: 'light-grey', flex: 1, borderWidth: 1, borderColor: 'gold', paddinTop: -20 }}>
    <VictoryChart>
      <VictoryCandlestick candleColors={{ positive: 'green', negative: 'red' }} data={DATA} />
    </VictoryChart>
  </View>
)

export { Chart }
