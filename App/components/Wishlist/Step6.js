import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';
import {BlueContainer} from './BlueContainer';
import LottieView from 'lottie-react-native';

export const Step6 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BlueContainer />

      <View style={{paddingHorizontal: 30}}>
        <View style={[styles.container, {alignItems: 'center'}]}>
          <Image
            source={require('../../assets/images/done.png')}
            style={styles.img}
          />

          <LottieView
            source={require('../../assets/animations/done.json')}
            autoPlay
            loop
            style={{
              zIndex: 2,
              position: 'absolute',
              width: 120,
              height: 120,
              bottom: 15,
              right: 15,
            }}
          />
          <Text style={styles.headerTxt}>Done !</Text>
          <Text
            style={[
              styles.headerTxt,
              {
                fontSize: 14,
                fontWeight: '400',
                marginTop: 20,
                color: 'black',
              },
            ]}>
            You will be completing your whishlist in next 25 days
          </Text>
        </View>
      </View>

      <Text
        onPress={() => navigation.navigate('Step1')}
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.blue,
          marginTop: 40,
        }}>
        Edit Whishlist
      </Text>

      <View
        style={{
          paddingHorizontal: 30,
          position: 'absolute',
          bottom: 30,
          width: '100%',
        }}>
        <TouchableOpacity
          style={styles.nxtbtn}
          onPress={() => navigation.navigate('WhishList')}>
          <Text style={{color: 'white'}}>See whishlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    marginTop: -150,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  amount: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'gray',
    padding: 10,
    marginTop: 50,
  },
  nxtbtn: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  btn: {
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 10,
  },
  img: {
    width: '100%',
    height: screen.height / 3,
    resizeMode: 'contain',
  },
});
