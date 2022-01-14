import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import WhishlistItem from './whishlistItem/WhishlistItem';
import {connect} from 'react-redux';

const WhishsList = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingRight: 10,
        }}>
        <Text style={styles.headertxt}>Whishlist</Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('WishListStackScreen', {screen: 'Step1'})
          }>
          <Entypo name="plus" color="black" size={20} />
        </TouchableOpacity>
      </View>
      {props.loading ? (
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <WhishlistItem data={props.WhishList} />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    WhishList: state.whishlist.whishlistDetails,
    loading: state.whishlist.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadwhishlist: userId => dispatch(),
  };
};

export default connect(mapStateToProps)(WhishsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingRight: 0,
  },

  headertxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
});
