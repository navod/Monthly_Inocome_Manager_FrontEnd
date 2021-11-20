import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

export const BlueContainer = () => {
  return <View style={styles.container}></View>;
};

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: screen.height / 3,
    borderBottomLeftRadius: screen.width,
    borderBottomRightRadius: screen.width,
    transform: [{scaleX: 1.5}],
  },
});
