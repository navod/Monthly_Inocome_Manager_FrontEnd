import React from 'react';
import {View, Text} from 'react-native';

import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {BottomTabScreen} from './BottomTab';
import WhishsList from '../screens/WhishsList';
import {WishListStackScreen} from './WhishListStepStack';

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator>
    <ModalStack.Screen
      name="BottomTabScreen"
      component={BottomTabScreen}
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      name="WishListStackScreen"
      component={WishListStackScreen}
      options={{headerShown: false}}
    />
  </ModalStack.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <ModalStackScreen />
    </NavigationContainer>
  );
}
