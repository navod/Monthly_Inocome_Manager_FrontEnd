import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import {BlueContainer} from './BlueContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../util/Api';
import {saveWhishlist} from '../../store/actions/Whishlist/whishlist';
import {connect} from 'react-redux';
const Step5 = props => {
  const [isFair, setIsFair] = useState(false);
  const [isGood, setIsGood] = useState(false);
  const [isExcellent, setIsExcellent] = useState(false);

  const checkSave = number => {
    if (number == 1) {
      setIsFair(!isFair);
      setIsGood(false);
      setIsExcellent(false);
    }
    if (number == 2) {
      setIsGood(!isGood);
      setIsFair(false);
      setIsExcellent(false);
    }
    if (number == 3) {
      setIsExcellent(!isExcellent);
      setIsGood(false);
      setIsFair(false);
    }
  };

  const {params} = props.route;


  const saveValue = () => {
    props.onSaveWhishlist(
      params.saveTo,
      params.category.category,
      params.category.color,
      params.saveType,
      params.userId,
      params.savedDate,
      params.savedAmount,
      params.savedDate,
    );
  };
  return (
    <View style={{flex: 1}}>
      <BlueContainer />
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>Select Amount</Text>
          <Text
            style={[
              styles.headerTxt,
              {
                fontSize: 14,
                fontWeight: '400',
                marginTop: 20,
                paddingHorizontal: 30,
                color: 'black',
              },
            ]}>
            How much can you save for each month for this whishlist?
          </Text>
          <Text style={{color: 'gray', marginTop: 30}}>Suggested for you</Text>
          <View style={styles.row}>
            {isFair == true && (
              <Ionicons
                name="ios-checkmark-circle-sharp"
                color="#2CC244"
                style={styles.check}
                size={20}
              />
            )}
            <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>
              Fair
            </Text>

            <TouchableOpacity style={styles.btn} onPress={() => checkSave(1)}>
              <Text style={{color: 'black'}}>Rs 1500(5%) income</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            {isGood == true && (
              <Ionicons
                name="ios-checkmark-circle-sharp"
                color="#2CC244"
                style={styles.check}
                size={20}
              />
            )}
            <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>
              Good
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => checkSave(2)}>
              <Text style={{color: 'black'}}>Rs 3000(10%) income</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, {marginBottom: 10}]}>
            {isExcellent == true && (
              <Ionicons
                name="ios-checkmark-circle-sharp"
                color="#2CC244"
                style={styles.check}
                size={20}
              />
            )}

            <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>
              Great
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => checkSave(3)}>
              <Text style={{color: 'black'}}>Rs 4500(15%) income</Text>
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
          onPress={() => {
            props.navigation.navigate('WishListStackScreen', {
              screen: 'Step6',
            });
            saveValue();
          }}>
          <Text style={{color: 'white'}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveWhishlist: (
      saveTo,
      description,
      color,
      saveType,
      userId,
      savedDate,
      savedAmount,
    ) =>
      dispatch(
        saveWhishlist(
          saveTo,
          description,
          color,
          saveType,
          userId,
          savedDate,
          savedAmount,
        ),
      ),
  };
};

export default connect(null, mapDispatchToProps)(Step5);

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
