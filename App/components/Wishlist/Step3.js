import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import {BlueContainer} from './BlueContainer';
import RNSpeedometer from 'react-native-speedometer';

export const Step3 = ({route, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BlueContainer />
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>
            If you add it, how it depend on your income ?
          </Text>
          <Text
            style={[
              styles.headerTxt,
              {
                fontSize: 18,
                fontWeight: '400',
                marginTop: 20,
                paddingHorizontal: 30,
                color: 'black',
                textAlign: 'left',
              },
            ]}>
            Risks,
          </Text>
          <Text>1).</Text>
          <Text>2).</Text>
          <Text>3).</Text>
          <Text>4).</Text>
          <Text>5).</Text>
          <Text>6).</Text>

          <RNSpeedometer value={120} size={200} />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 30,
          position: 'absolute',
          bottom: 30,
          width: '100%',
        }}>
        <TouchableOpacity
          style={styles.nxtbtn}
          onPress={() =>
            navigation.navigate('WishListStackScreen', {
              screen: 'Step4',
              params: route.params,
            })
          }>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    paddingBottom: 80,
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
  check: {
    position: 'absolute',
    right: -5,
    zIndex: 1,
    borderRadius: 100,
    paddingLeft: 3,
    paddingTop: 1,
    backgroundColor: 'white',
    top: -4,
  },
});
