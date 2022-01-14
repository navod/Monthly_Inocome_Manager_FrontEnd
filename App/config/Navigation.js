import React from 'react';
import {View, Text} from 'react-native';

import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {BottomTabScreen} from './BottomTab';
import WhishsList from '../screens/whishlist/WhishsList';
import {WishListStackScreen} from './WhishListStepStack';
import CreateExpends from '../screens/CreateExpends';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{headerShown: false}}>
    <ModalStack.Screen name="Login" component={Login} />
    <ModalStack.Screen name="SignUp" component={SignUp} />
    <ModalStack.Screen name="BottomTabScreen" component={BottomTabScreen} />
    <ModalStack.Screen
      name="WishListStackScreen"
      component={WishListStackScreen}
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
