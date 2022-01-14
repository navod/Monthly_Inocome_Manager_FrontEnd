import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBorad from '../screens/DashBorad';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from '../screens/Profile';
import CreateExpends from '../screens/CreateExpends';

import Charts from '../screens/Charts';
import colors from '../constants/colors';
import WhishsList from '../screens/whishlist/WhishsList';

let tabOffSet = 0;
const Tab = createBottomTabNavigator();

const getWidth = () => {
  let width = Dimensions.get('screen').width;

  width = width - 80;
  return width / 5;
};

export const BottomTabScreen = () => {
  tabOffSet = useRef(new Animated.Value(0)).current;
  // x = tabOffSet;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen
          name="DashBorad"
          component={DashBorad}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return <Entypo name="home" size={25} color={colors.blue} />;
              }
              return <AntDesign name="home" size={25} color={'black'} />;
            },
            headerShown: false,
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffSet, {
                toValue: -20,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Charts"
          component={Charts}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <FontAwesome name="pie-chart" size={25} color={colors.blue} />
                );
              }
              return <Feather name="pie-chart" size={25} color={'black'} />;
            },
            headerShown: false,
            // tabBarItemStyle: {marginRight: 0},
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffSet, {
                toValue: getWidth() - 10,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="CreateExpends"
          component={CreateExpends}
          options={{
            headerShown: false,
            tabBarItemStyle: styles.tabBarItemStyle,

            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/images/plus.png')}
                style={{width: '100%', height: '100%', tintColor: colors.blue}}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffSet, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="WhishList"
          component={WhishsList}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return <AntDesign name="heart" size={25} color={colors.blue} />;
              }

              return <AntDesign name="hearto" size={25} color={'black'} />;
            },
            headerShown: false,
            tabBarItemStyle: {marginLeft: 40},
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffSet, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <FontAwesome name="user" size={25} color={colors.blue} />
                );
              }
              return <FontAwesome name="user-o" size={25} color={'black'} />;
            },
            // tabBarItemStyle: {marginLeft: 40},
            headerShown: false,
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffSet, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: colors.blue,
          position: 'absolute',
          bottom: 60,
          left: 50,
          borderRadius: 2,
          transform: [{translateX: tabOffSet}],
        }}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F7F7F7',
    position: 'absolute',
    // bottom: 30,
    height: 60,
    elevation: 4,
    shadowOpacity: 0.05,
    // paddingHorizontal: 20,
    zIndex: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  tabBarItemStyle: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    bottom: 30,
    borderRadius: 60,

    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    left: getWidth() * 2 + 45,
  },
});
