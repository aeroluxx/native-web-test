import React from 'react'
import { View } from 'react-native'
import { VictoryAxis, VictoryChart, VictoryCandlestick } from 'victory'
import { DATA } from '../../DATA'

const Chart = () => (
  <View style={{ flex: 1 }}>
    <VictoryChart
      scale={{ x: 'time' }}
      height={230}
      //width={900}
      //maxDomain={{ y: 25 }}
      //padding={{ top: 30, bottom: 10, left: 10, right: 20 }}
      //margin={{ top: -100, bottom: 0, left: 0, right: 0 }}
      domainPadding={{ x: 15, y: 15 }}
    >
      <VictoryAxis
        style={{
          axis: { stroke: 'white' },
          ticks: { fill: 'white' },
          tickLabels: { fill: 'white' }
        }}
        fixLabelOverlap
      />
      <VictoryAxis
        style={{
          axis: { stroke: 'white' },
          ticks: { fill: 'transparent' },
          tickLabels: { fill: 'transparent' }
        }}
        dependentAxis
      />
      <VictoryCandlestick
        candleColors={{ positive: 'green', negative: 'red' }}
        candleRatio={0.6}
        //candleWidth={8}
        //domain={{ x: [0, 10], y: [0, 1] }}
        //domainPadding={{ x: [20, -20], y: 15 }}
        height={250}
        data={DATA}
        //labels={d => `open: ${d.open}`}
        padding={{ top: 0, bottom: 0, left: 5, right: 5 }}
        scale={{ x: 'linear', y: 'linear' }}
        style={{
          data: {
            //     fillOpacity: 0.7
            //   },
            stroke: 'white',
            strokeWidth: 0.2
            // labels: {
            //   fontSize: 6,
            //   fill: 'white'
            // }
          }
        }}
        wickStrokeWidth={1}
      />
    </VictoryChart>
  </View>
)

export { Chart }
