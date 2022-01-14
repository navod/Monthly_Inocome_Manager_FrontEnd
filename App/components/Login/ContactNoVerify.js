import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PhoneInput from 'react-native-phone-number-input';
import colors from '../../constants/colors';
import {createUser, userLogin} from '../../store/actions/Auth/auth';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

const ContactNoVerify = props => {
  const phoneInput = useRef(PhoneInput);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState('click');
  const [showMessage, setShowMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  let bgc = valid === 'error' ? 'red' : colors.green;
  let visibleBtn = valid === 'success' ? true : false;
  return (
    <View style={{marginTop: 40}}>
      <View style={styles.container}>
        <Text style={styles.labelStyles}>Mobile Number</Text>
        <View
          style={{
            justifyContent: 'space-between',
            marginTop: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="LK"
            layout="first"
            onChangeText={text => {
              setValue(text);
              if (value.length > text.length) {
                setValid('click');
                // setMobileNoStates(true);
              }
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            containerStyle={{
              borderWidth: 1,
              width: '76%',
              alignItems: 'center',
              padding: 0,
              height: 50,
              borderRadius: 8,
              borderColor: colors.lightGray,
              borderRightWidth: 0,
            }}
            textInputStyle={{
              height: 40,
              borderWidth: 1,
              fontSize: 14,
              // marginLeft: 5,
              width: 60,
              paddingRight: 0,
              paddingLeft: 7,
              borderColor: colors.lightGray,
              borderRadius: 8,
              color: colors.darkGray,
            }}
            codeTextStyle={{
              fontSize: 12,
              marginLeft: -10,
              color: colors.darkGray,
            }}
            textContainerStyle={{
              marginLeft: -15,
              height: 51,
              borderRightWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              // width: 50,
              backgroundColor: 'white',
              paddingRight: 10,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderColor: colors.lightGray,
            }}
            flagButtonStyle={{marginLeft: -10}}
            // withDarkTheme
            // withShadow
            // autoFocus
          />
          <TouchableOpacity
            style={{
              backgroundColor: bgc,
              borderRadius: 8,
              marginLeft: 20,
              width: 60,
              zIndex: 10,
              height: 40,
              justifyContent: 'center',
            }}
            disabled={visibleBtn}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid('');
              setVisible(true);
              setTimeout(() => {
                setVisible(false);
                setValid(checkValid ? 'success' : 'error');
                // setMobileNoStates(checkValid ? false : true);
              }, 2500);
            }}>
            {valid === '' && (
              <ActivityIndicator
                size="small"
                animating={visible}
                color="white"
              />
            )}

            {valid === 'success' && (
              <AntDesign
                name="checkcircleo"
                size={20}
                color="white"
                style={{textAlign: 'center'}}
              />
            )}

            {valid === 'click' && (
              <Entypo
                name="arrow-right"
                size={40}
                color="white"
                style={{textAlign: 'center'}}
              />
            )}

            {valid === 'error' && (
              <MaterialIcons
                name="error"
                size={20}
                color="white"
                style={{textAlign: 'center'}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {props.loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              if (visibleBtn && props.username) {
                props.onSignUp(props.username, value, navigation);
              } else {
                alert('Please verify phone number..!');
              }
              // alert('Login SUccess');
            }}>
            <Text style={{color: 'white'}}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: colors.lightGray,
              textAlign: 'center',
              marginTop: 20,
            }}>
            Or
          </Text>
          <Text
            style={styles.signUp}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {loading: state.auth.loading};
};

const mapToDispatch = dispatch => {
  return {
    onSignUp: (username, contact, navigation) =>
      dispatch(createUser(username, contact, navigation)),
  };
};

export default connect(mapStateToProps, mapToDispatch)(ContactNoVerify);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: colors.lightGray,
    borderWidth: 1,
  },
  labelStyles: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    color: colors.darkGray,
    marginTop: -13,
    fontWeight: 'bold',
    width: 125,
    fontSize: 15,
  },
  inputStyles: {
    color: colors.darkGray,
    // paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignItems: 'center',
    height: 50,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginBtn: {
    backgroundColor: colors.blue,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  loginTxt: {
    color: colors.blue,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
});
