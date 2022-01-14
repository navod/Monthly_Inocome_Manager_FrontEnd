import axios from 'axios';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MonthlySpends} from '../components/Dashboard/MonthlySpends';
import {SpendList} from '../components/Dashboard/SpendList';
import {WhishList} from '../components/Dashboard/WhishList';
import {connect} from 'react-redux';
import {getWhishlistDetails} from '../store/actions/Whishlist/whishlist';

const DashBorad = props => {
  useEffect(() => {
    props.onGetAllWhishlistDetail(props.userId);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={{alignItems: 'flex-end', padding: 3}}>
          <View style={styles.not_dot}></View>
          <Ionicons name="notifications" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.header_row}>
          <Text style={styles.headerTxt}>Dashboard</Text>
          <TouchableOpacity style={styles.profileImg}>
            <Image
              source={require('../assets/images/profileImg.png')}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 30, marginTop: 50}}>
          <MonthlySpends />
        </View>
        <View style={{marginLeft: 30, marginTop: 35, marginBottom: 20}}>
          <SpendList />
        </View>

        <View style={{marginLeft: 30, marginTop: 35, marginBottom: 20}}>
          <WhishList data={props.whishlistDetails} />
        </View>
        <View style={{height: 80}}></View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    WhishList: state.whishlist.whishlistDetails,
  };
};

const mapDispatchToProps = disptach => {
  return {
    onGetAllWhishlistDetail: userId => disptach(getWhishlistDetails(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBorad);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  not_dot: {
    position: 'absolute',
    top: 10,
    backgroundColor: 'red',
    borderRadius: 100,
    width: 10,
    height: 10,
    right: 20,
    zIndex: 1,
  },
  header_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
  headerTxt: {
    fontWeight: '700',
    color: 'black',
    fontSize: 30,
  },
});
