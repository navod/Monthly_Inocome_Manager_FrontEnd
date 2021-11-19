import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import colors from '../../constants/colors';
import Feather from 'react-native-vector-icons/Feather';

export const MonthlySpends = () => {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/shape.png')}
        style={styles.shape}
      />
      <View style={styles.triangle}></View>
      <Text style={{color: 'white', fontSize: 15}}>December</Text>

      <View style={styles.spentRow}>
        <Text style={styles.amount}>Rs 15,000</Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../assets/images/simpleIcon.png')} />
          <Feather name="bar-chart-2" size={45} color="white" />
        </View>
      </View>

      <View style={styles.splitterRow}>
        <View style={styles.fullwidth}>
          <View
            style={{
              width: '76%',
              backgroundColor: 'white',
              height: '100%',
              borderRadius: 20,
            }}></View>
        </View>
        <Text style={{color: 'white'}}>76%</Text>
      </View>

      <Text style={{color: 'white'}}>Spend Rs 68/day</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: 20,
    borderRadius: 35,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 35,
  },

  spentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  splitterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
  },
  fullwidth: {
    height: 5,
    backgroundColor: '#73A7C9',
    width: '80%',
    borderRadius: 20,
    alignItems: 'flex-start',
  },
  shape: {
    position: 'absolute',
    height: '137%',
    width: '60%',
    resizeMode: 'contain',
    right: -10,
    tintColor: '#4274FF',
  },
});
