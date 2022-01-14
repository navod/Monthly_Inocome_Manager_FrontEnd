import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import colors from '../constants/colors';

import {
  deleteWhishlist,
  updateWhishlist,
} from '../store/actions/Whishlist/whishlist';

const ModalView = props => {
  const [saveAmount, setSaveAmount] = useState('');
  const [inputCheck, setInputCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const NEED_TO_SAVE_AMOUNT = props.data.saveTo - props.data.savedAmount;

  const showToastWithGravity = successMsg => {
    ToastAndroid.showWithGravity(
      successMsg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const onUpdateWhishlist = () => {
    if (saveAmount !== '' && !inputCheck) {
      props.onUpdateWhishlist(props.data.whishlistId, props.userId, saveAmount);
      props.onClose();
      showToastWithGravity('Save your money to your dream');
    }
    if (saveAmount === '') {
      setErrorMsg('Please set save amount');
      setInputCheck(true);
    }
  };

  const onSetSaveAmount = amount => {
    setSaveAmount(amount);
    if (amount > NEED_TO_SAVE_AMOUNT) {
      setErrorMsg('Please set save amount less than need to save amount');
      setInputCheck(true);
    } else {
      setInputCheck(false);
    }
  };

  const onDeleteWhishlist = () => {
    props.onDeleteWhishlist(props.data.whishlistId, props.userId);
    props.onClose();
    showToastWithGravity('Whishlist deleted');
  };
  return (
    <View style={{padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onDeleteWhishlist()}>
          <AntDesign name="delete" color={'white'} size={15} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: colors.darkGray}}
          onPress={() => props.onClose()}>
          <FontAwesome name="close" color={'white'} size={15} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTxt}>{props.data.description}</Text>
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <Text style={{textAlign: 'left',color: 'black'}}>Save To</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            {props.data.saveTo}
          </Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={{textAlign: 'left',color: 'black'}}>Need To save</Text>
          <Text style={{fontWeight: 'bold',color: 'black', fontSize: 20}}>
            {NEED_TO_SAVE_AMOUNT}
          </Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="type save amount"
        keyboardType="numeric"
        value={saveAmount}
        onChangeText={onSetSaveAmount}
        placeholderTextColor={colors.lightGray}
      />
      {inputCheck && <Text style={{color: 'red'}}>{errorMsg}</Text>}
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => onUpdateWhishlist()}>
        <Text style={{color: 'white'}}>Save Amount</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
  };
};
const mapDisptachToProps = dispatch => {
  return {
    onUpdateWhishlist: (whishId, userId, savedAmount) =>
      dispatch(updateWhishlist(whishId, userId, savedAmount)),
    onDeleteWhishlist: (whishId, userId) =>
      dispatch(deleteWhishlist(whishId, userId)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ModalView);
const styles = StyleSheet.create({
  btn: {
    width: 35,
    height: 35,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 20,
    color: 'black'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  rowItem: {
    width: '45%',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    backgroundColor: 'white',
  },

  input: {
    borderBottomWidth: 1,
    marginTop: 20,
    textAlign: 'center',
    color: 'black'
  },
  saveBtn: {
    backgroundColor: colors.blue,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
