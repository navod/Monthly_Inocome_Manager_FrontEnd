import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BlueContainer} from './BlueContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../../constants/colors';

export const Step1 = ({navigation}) => {
  const [foodIsEnable, setFoodIsEnable] = useState(false);
  const [gameIsEnable, setGameIsEnable] = useState(false);
  const [feeIsEnable, setFeeIsEnable] = useState(false);
  const [shoppingIsEnable, setShoppingIsEnable] = useState(false);
  const [sportsIsEnable, setSportsIsEnable] = useState(false);
  const [travelIsEnable, setTravelIsEnable] = useState(false);
  const [giftIsEnable, setGiftIsEnable] = useState(false);
  const [bikeIsEnable, setBikeIsEnable] = useState(false);
  const [booksIsEnable, setBookIsEnable] = useState(false);

  const checkEnable = number => {
    if (number === 1) {
      setFoodIsEnable(!foodIsEnable);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 2) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(!shoppingIsEnable);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 3) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(!feeIsEnable);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 4) {
      setFoodIsEnable(false);
      setGameIsEnable(!gameIsEnable);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 5) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(!sportsIsEnable);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 6) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(!travelIsEnable);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 7) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(false);
      setBookIsEnable(!booksIsEnable);
    } else if (number === 8) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(!giftIsEnable);
      setBikeIsEnable(false);
      setBookIsEnable(false);
    } else if (number === 9) {
      setFoodIsEnable(false);
      setGameIsEnable(false);
      setFeeIsEnable(false);
      setShoppingIsEnable(false);
      setShoppingIsEnable(false);
      setSportsIsEnable(false);
      setTravelIsEnable(false);
      setGiftIsEnable(false);
      setBikeIsEnable(!bikeIsEnable);
      setBookIsEnable(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <BlueContainer />
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Select your whishlist</Text>
          <Text style={{marginTop: 20, color: 'gray'}}>
            Suggestions for you
          </Text>
          <View>
            <View style={styles.categoryRow}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(1)}>
                {foodIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}

                <View style={styles.backColor}>
                  <Ionicons
                    color={colors.blue}
                    name="fast-food-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(2)}>
                {shoppingIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
                <View style={styles.backColor}>
                  <SimpleLineIcons
                    color={colors.blue}
                    name="handbag"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Shopping</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(3)}>
                {feeIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
                <View style={styles.backColor}>
                  <Fontisto color={colors.blue} name="money-symbol" size={30} />
                </View>
                <Text style={styles.itemtxt}>Fee</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryRow}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(4)}>
                {gameIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
                <View style={styles.backColor}>
                  <Ionicons
                    color={colors.blue}
                    name="md-game-controller-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Games</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(5)}>
                {sportsIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
                <View style={styles.backColor}>
                  <Ionicons
                    color={colors.blue}
                    name="md-basketball-outline"
                    size={30}
                  />
                </View>
                <Text style={styles.itemtxt}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(6)}>
                {travelIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
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
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(7)}>
                {booksIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
                <View style={styles.backColor}>
                  <Ionicons color={colors.blue} name="book-outline" size={30} />
                </View>
                <Text style={styles.itemtxt}>Books</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(8)}>
                {giftIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
                <View style={styles.backColor}>
                  <Ionicons color={colors.blue} name="gift-outline" size={30} />
                </View>
                <Text style={styles.itemtxt}>Gifts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => checkEnable(9)}>
                {bikeIsEnable == true && (
                  <Ionicons
                    name="ios-checkmark-circle-sharp"
                    color="#2CC244"
                    style={styles.check}
                    size={20}
                  />
                )}
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
            navigation.navigate('WishListStackScreen', {screen: 'Step2'})
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
