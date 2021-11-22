import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import {BlueContainer} from './BlueContainer';

export const Step2 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BlueContainer />
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Add Whishlist amount</Text>
          <Text
            style={[
              styles.headerTxt,
              {fontSize: 14, fontWeight: '400', marginTop: 20},
            ]}>
            How much you need a TOTAL for your whishlist?
          </Text>
          <View style={{padding: 10}}>
            <TextInput
              style={styles.amount}
              placeholder="Type Amount"
              keyboardType="numeric"
              underlineColorAndroid="white"
              placeholderTextColor="gray"
            />
          </View>
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
            navigation.navigate('WishListStackScreen', {screen: 'Step3'})
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
});
