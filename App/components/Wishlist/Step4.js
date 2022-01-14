import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import {BlueContainer} from './BlueContainer';

export const Step4 = ({route, navigation}) => {
  const [saveType, setSaveType] = useState(null);

  return (
    <View style={{flex: 1}}>
      <BlueContainer />
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Select Save Type</Text>
          <Text
            style={[
              styles.headerTxt,
              {fontSize: 14, fontWeight: '400', marginTop: 20},
            ]}>
            Which type of saving is?
          </Text>
          {saveType && <Text style={styles.saveType}>{saveType}</Text>}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setSaveType('Weekly')}>
              <Text style={{color: colors.blue}}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSaveType('Monthly')}
              style={[styles.btn, {backgroundColor: colors.blue}]}>
              <Text style={{color: 'white'}}>Monthly</Text>
            </TouchableOpacity>
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
            navigation.navigate('WishListStackScreen', {
              screen: 'Step5',
              params: {
                ...route.params,
                saveType: saveType,
              },
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
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  btn: {
    borderRadius: 10,
    borderColor: colors.blue,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    padding: 10,
  },
  saveType: {
    color: colors.blue,
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
