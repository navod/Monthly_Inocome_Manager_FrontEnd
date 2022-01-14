import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ContactNoVerify from '../components/Login/ContactNoVerify';
import {BlueContainer} from '../components/Wishlist/BlueContainer';
import colors from '../constants/colors';

export default function SignUp() {
  const [username, setUsername] = useState(null);
  return (
    <View style={styles.container}>
      <ScrollView>
        <BlueContainer />
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.loginTxt}>Sign Up</Text>
          <View style={[styles.containerStyles, {marginTop: 35}]}>
            <Text style={[styles.labelStyles, {width: 85}]}>Username</Text>
            <TextInput
              placeholder="name"
              style={styles.inputStyles}
              keyboardType="email-address"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

          <ContactNoVerify username={username} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 10,
  },
  inputStyles: {
    paddingLeft: 5,
    height: '100%',
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
