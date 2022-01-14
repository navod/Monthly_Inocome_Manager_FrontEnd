import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {BlueContainer} from '../components/Wishlist/BlueContainer';
import colors from '../constants/colors';
import {userLogin} from '../store/actions/Auth/auth';
import {connect} from 'react-redux';

const Login = props => {
  const navigation = useNavigation();

  const [username, setUserName] = useState('navod');
  const [contact, setContact] = useState('763933541');

  const loginUser = () => {
    props.onUserLogin(username, contact, navigation);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <BlueContainer />

        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.loginTxt}>Login</Text>
          <View style={[styles.containerStyles, {marginTop: 35}]}>
            <Text style={[styles.labelStyles, {width: 85}]}>Username</Text>
            <TextInput
              placeholder="name"
              style={styles.inputStyles}
              keyboardType="email-address"
              value={username}
              onChangeText={text => setUserName(text)}
              placeholderTextColor={colors.lightGray}
            />
          </View>
          <View style={[styles.containerStyles, {marginTop: 35}]}>
            <Text style={[styles.labelStyles, {width: 130}]}>
              Mobile Number
            </Text>
            <TextInput
              placeholder="Mobile Number"
              style={styles.inputStyles}
              keyboardType="numeric"
              value={contact}
              onChangeText={text => setContact(text)}
              placeholderTextColor={colors.lightGray}
            />
          </View>
          {props.loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => loginUser()}>
                <Text style={{color: 'white'}}>Login</Text>
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
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    loading: state.auth.loading,
  };
};

const mapToDispatch = dispatch => {
  return {
    onUserLogin: (username, contact, navigation) =>
      dispatch(userLogin(username, contact, navigation)),
  };
};

export default connect(mapStateToProps, mapToDispatch)(Login);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 10,
    paddingBottom: 10,
  },
  inputStyles: {
    paddingLeft: 5,
    height: '100%',
    color: 'black',
  },
  containerStyles: {
    marginTop: 20,
    borderWidth: 0.8,
    height: 65,
    padding: 12,
    borderRadius: 8,
    borderColor: colors.lightGray,
  },
  labelStyles: {
    backgroundColor: 'white',
    marginTop: -23,
    // borderWidth: 1,
    width: 60,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.darkGray,
    justifyContent: 'center',
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
  signUp: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
});
