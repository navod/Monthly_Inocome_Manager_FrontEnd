import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BlueContainer} from './BlueContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../../constants/colors';
export const Step1 = () => {
  return (
    <View>
      <BlueContainer />
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Select your whishlist</Text>
          <Text style={{marginTop: 20, color: 'gray'}}>
            Suggestions for you
          </Text>
          <View>
            <View style={styles.categoryRow}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <Ionicons
                    color={colors.blue}
                    name="fast-food-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <SimpleLineIcons
                    color={colors.blue}
                    name="handbag"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Shopping</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <Fontisto color={colors.blue} name="money-symbol" size={30} />
                </View>
                <Text style={styles.itemtxt}>Fee</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryRow}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <Ionicons
                    color={colors.blue}
                    name="md-game-controller-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Games</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <Ionicons
                    color={colors.blue}
                    name="md-basketball-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <MaterialCommunityIcons
                    color={colors.blue}
                    name="bag-personal-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Travel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryRow}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <Ionicons color={colors.blue} name="book-outline" size={30} />
                </View>
                <Text style={styles.itemtxt}>Books</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <Ionicons color={colors.blue} name="gift-outline" size={30} />
                </View>
                <Text style={styles.itemtxt}>Gifts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.backColor}>
                  <MaterialCommunityIcons
                    color={colors.blue}
                    name="motorbike"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Bike</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.blue,
          marginTop: 20,
        }}>
        Create my own goal
      </Text>
      <View style={{paddingHorizontal: 30, marginTop: 10}}>
        <TouchableOpacity style={styles.nxtbtn}>
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
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  backColor: {
    borderRadius: 20,
    height: 60,
    width: 60,
    backgroundColor: '#CAE4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemtxt: {
    color: 'black',
    fontSize: 12,
  },
  nxtbtn: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
