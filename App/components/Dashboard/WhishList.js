import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import colors from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const WhishList = () => {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headertxt}>Whishlist</Text>
        <Text>See all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.whishlistItem}>
          <MaterialCommunityIcons
            name="tshirt-crew-outline"
            size={35}
            color="white"
            style={{marginTop: 10}}
          />
          <Text style={{fontWeight: 'bold', color: 'white'}}>t-shirt</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: 20,
              marginBottom: 10,
            }}></View>

          <View style={styles.splitterRow}>
            <View style={styles.fullwidth}>
              <View
                style={{
                  width: '50%',
                  backgroundColor: 'white',
                  height: '100%',
                  borderRadius: 20,
                }}></View>
            </View>
            <Text style={{color: 'white', fontSize: 12}}>50%</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.whishlistItem, {backgroundColor: colors.blue}]}>
          <MaterialIcons
            name="attach-money"
            size={35}
            color="white"
            style={{marginTop: 10}}
          />
          <Text style={{fontWeight: 'bold', color: 'white'}}>College Fee</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: 20,
              marginBottom: 10,
            }}></View>

          <View style={styles.splitterRow}>
            <View style={styles.fullwidth}>
              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  height: '100%',
                  borderRadius: 20,
                }}></View>
            </View>
            <Text style={{color: 'white', fontSize: 12}}>45%</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.whishlistItem, {backgroundColor: colors.red}]}>
          <MaterialCommunityIcons
            name="bag-carry-on"
            size={35}
            color="white"
            style={{marginTop: 10}}
          />
          <Text style={{fontWeight: 'bold', color: 'white'}}>Travel</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: 20,
              marginBottom: 10,
            }}></View>

          <View style={styles.splitterRow}>
            <View style={styles.fullwidth}>
              <View
                style={{
                  width: '90%',
                  backgroundColor: 'white',
                  height: '100%',
                  borderRadius: 20,
                }}></View>
            </View>
            <Text style={{color: 'white', fontSize: 12}}>90%</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  whishlistItem: {
    padding: 10,
    backgroundColor: colors.green,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 25,
  },
  splitterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
  },
  fullwidth: {
    height: 5,
    // backgroundColor: '#73A7C9',
    width: '75%',
    borderRadius: 20,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
