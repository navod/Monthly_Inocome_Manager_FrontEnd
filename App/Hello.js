import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Hello() {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Icon name="rocket" size={30} color="#900" />
      <Icon name="rocket" size={30} color="#900" />
      <Text>Hello</Text>
    </View>
  );
}
