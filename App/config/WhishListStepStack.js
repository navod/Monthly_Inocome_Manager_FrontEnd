import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {Step1} from '../components/Wishlist/Step1';
import {Step2} from '../components/Wishlist/Step2';
import {Step3} from '../components/Wishlist/Step3';
import {Step4} from '../components/Wishlist/Step4';
import {Step5} from '../components/Wishlist/Step5';
import colors from '../constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/core';
const WishlistStack = createStackNavigator();

export const WishListStackScreen = () => {
  const navigation = useNavigation();
  return (
    <WishlistStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {color: 'white', marginLeft: 20, fontWeight: 'bold'},
        headerTintColor: 'white',
        headerRight: () => (
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('BottomTabScreen')}>
            <Fontisto color="white" name="close-a" />
          </TouchableOpacity>
        ),
      }}>
      <WishlistStack.Screen
        name="Step1"
        component={Step1}
        options={{
          title: 'Step 1/5',
        }}
      />
      <WishlistStack.Screen
        name="Step2"
        component={Step2}
        options={{
          title: 'Step 2/5',
        }}
      />
      <WishlistStack.Screen
        name="Step3"
        component={Step3}
        options={{
          title: 'Step 3/5',
        }}
      />
      <WishlistStack.Screen
        name="Step4"
        component={Step4}
        options={{
          title: 'Step 4/5',
        }}
      />
      <WishlistStack.Screen
        name="Step5"
        component={Step5}
        options={{
          title: 'Step 5/5',
        }}
      />
    </WishlistStack.Navigator>
  );
};
