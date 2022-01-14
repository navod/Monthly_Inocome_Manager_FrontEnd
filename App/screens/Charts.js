import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {data} from '../data/ChartData';

const screen = Dimensions.get('screen');

export default function Charts() {
  return (
    <View style={{padding: 20}}>
      <Text style={styles.headertxt}>Analyze</Text>
      <PieChart
        data={data}
        width={screen.width}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '7',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        padding={'15'}

        // center={[10, 50]}
        // absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headertxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});
