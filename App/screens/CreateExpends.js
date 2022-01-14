import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import colors from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function CreateExpends() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.blueContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={{position: 'absolute', left: 0, zIndex: 1}}>
            <Feather name="arrow-left" color="white" size={20} />
          </TouchableOpacity>
          <Text style={styles.title}>Add Expense</Text>
        </View>
        <Text style={styles.price}>Rs 15, 000</Text>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <ScrollView>
        <View style={{padding: 20}}>
          <TouchableOpacity style={styles.secRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="appstore-o" color={colors.blue} size={20} />
              <Text style={{marginLeft: 20, fontSize: 15}}>Category</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secRow}
            onPress={() => setDatePickerVisibility(true)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="calendar" color={colors.blue} size={20} />
              <Text style={{marginLeft: 20, fontSize: 15}}>Date</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="gray" />
          </TouchableOpacity>
          <View style={styles.secRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Fontisto name="money-symbol" color={colors.blue} size={20} />
              <TextInput
                style={{
                  marginLeft: 20,
                  fontSize: 15,
                  color: 'gray',
                  padding: 0,
                  borderWidth: 0,
                }}
                placeholder="Spends"
                placeholderTextColor="gray"
                underlineColorAndroid="white"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.secRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                name="md-location-outline"
                color={colors.blue}
                size={20}
              />
              <Text style={{marginLeft: 20, fontSize: 15}}>Location</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SimpleLineIcons name="note" color={colors.blue} size={20} />
              <Text style={{marginLeft: 20, fontSize: 15}}>Note</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <Text
          onPress={() => navigation.navigate('Step1')}
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: colors.blue,
            marginTop: 0,
          }}>
          + Add image
        </Text>

        <View
          style={{
            paddingHorizontal: 30,

            width: '100%',
          }}>
          <TouchableOpacity
            style={styles.nxtbtn}
            onPress={() => navigation.navigate('WhishList')}>
            <Text style={{color: 'white'}}>Add Transaction</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  blueContainer: {
    height: screen.height / 4,
    backgroundColor: colors.blue,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  secRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingLeft: 15,
    paddingBottom: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  nxtbtn: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginTop: 45,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 100,
  },
});
