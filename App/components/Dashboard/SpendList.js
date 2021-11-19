import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const SpendList = () => {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headertxt}>My Spends</Text>
        <Text>See all</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              style={styles.phone}
              name="cellphone-charging"
              size={35}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'black'}}>Net Banking</Text>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Rs 11,000
              </Text>
            </View>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>Today</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              style={[styles.phone, {backgroundColor: '#FAB41A'}]}
              name="restaurant"
              size={35}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'black'}}>Food & Drink</Text>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Rs 11,000
              </Text>
            </View>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>26 DEC</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    marginBottom: 20,
  },
  headertxt: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
  },
  listContainer: {
    borderRadius: 45,
    padding: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  phone: {
    backgroundColor: '#FF5F59',
    color: 'white',
    borderRadius: 20,
    padding: 10,
  },
  day: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },

  dayContainer: {
    color: 'black',
    backgroundColor: '#DEDCDC',
    padding: 3,
    width: 48,
    height: 48,

    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
