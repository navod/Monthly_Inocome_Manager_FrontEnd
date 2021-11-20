import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function WhishsList({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingRight:10
        }}>
        <Text style={styles.headertxt}>Whishlist</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('WishListStackScreen', {screen: 'Step1'})
          }>
          <Entypo name="plus" color="black" size={20} />
        </TouchableOpacity>
      </View>
        
      <View style={styles.itemContainer}>
        <View style={styles.itemRow}>
          <Image
            source={require('../assets/images/shape.png')}
            style={[styles.shape, {tintColor: '#3FCEA3'}]}
          />
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="tshirt-v-outline"
              color="white"
              size={30}
            />
            <Text style={{color: 'white'}}>T-shirt</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Rs 530
            </Text>
            <Text style={{color: 'white'}}>Saved</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Rs 600
            </Text>
            <Text style={{color: 'white'}}>Total</Text>
          </View>
        </View>
        <View style={styles.splitterRow}>
          <View style={styles.fullwidth}>
            <View
              style={{
                width: '76%',
                backgroundColor: 'white',
                height: '100%',
                borderRadius: 20,
              }}></View>
          </View>
          <Text style={{color: 'white'}}>76%</Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', marginRight: 8}}>Go to link</Text>
            <AntDesign name="arrowright" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingRight: 0,
  },
  itemContainer: {
    backgroundColor: colors.green,
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  shape: {
    position: 'absolute',
    height: '219%',
    width: '50%',
    resizeMode: 'contain',
    right: -20,
    tintColor: '#4274FF',
    top: 0,
  },
  splitterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  fullwidth: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '50%',
    borderRadius: 20,
    alignItems: 'flex-start',
  },
  btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
});
