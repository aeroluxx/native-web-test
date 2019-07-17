import React from 'react'
import { View } from 'react-native'
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick } from 'victory'
import { DATA } from '../../DATA'

const Chart = () => (
  <View style={{ flex: 1 }}>
    <VictoryChart
      scale={{ x: 'time' }}
      height={200}
      maxDomain={{ y: 25 }}
      padding={{ top: 10, bottom: 10, left: 20, right: 20 }}
    >
      <VictoryCandlestick
        candleColors={{ positive: 'green', negative: 'red' }}
        candleRatio={0.6}
        //candleWidth={8}
        //domain={{ x: [0, 10], y: [0, 1] }}
        //domainPadding={{ x: [20, -20], y: 15 }}
        height={250}
        data={DATA}
        //labels={d => `open: ${d.open}`}
        padding={{ top: 20, bottom: 20, left: 25, right: 25 }}
        //scale={{ x: 'linear', y: 'linear' }}
        // style={{
        //   data: {
        //     fillOpacity: 0.7
        //   },
        //   labels: {
        //     fontSize: 6,
        //     fill: 'white'
        //   }
        // }}
        wickStrokeWidth={1}
      />
    </VictoryChart>
  </View>
)

export { Chart }
