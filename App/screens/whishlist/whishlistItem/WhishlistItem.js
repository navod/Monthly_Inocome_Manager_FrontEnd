import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Dimensions,
} from 'react-native';
import colors from '../../../constants/colors';
import {RenderIcons} from '../../../constants/RenderIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalView from '../../ModalView';

export default function WhishlistItem(props) {
  const [modalVisible, setModalVisible] = useState(false);

  // const data = Object.values(props.data ?  : null);
  const [selectData, setSelectData] = useState(null);
  const renderItem = ({item}) => {
    return (
      <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ModalView
                data={selectData}
                onClose={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.itemRow}>
          <Image
            source={require('../../../assets/images/shape.png')}
            style={[styles.shape, {tintColor: 'rgba(0, 0, 0, 0.1)'}]}
          />
          <View style={{alignItems: 'center'}}>
            <RenderIcons type={item.description} />
            <Text style={{color: 'white'}}>{item.description}</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Rs {item.savedAmount}
            </Text>
            <Text style={{color: 'white'}}>Saved</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              Rs {item.saveTo}
            </Text>
            <Text style={{color: 'white'}}>Total</Text>
          </View>
        </View>
        <View style={styles.splitterRow}>
          <View style={styles.fullwidth}>
            <View
              style={{
                width: `${(item.savedAmount * 100) / item.saveTo}%`,
                backgroundColor: 'white',
                height: '100%',
                borderRadius: 20,
              }}></View>
          </View>
          <Text style={{color: 'white'}}>
            {(item.savedAmount * 100) / item.saveTo}%
          </Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setModalVisible(!modalVisible);
              setSelectData(item && item);
            }}>
            <Text style={{color: 'white', marginRight: 8}}>Go to link</Text>
            <AntDesign name="arrowright" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={props.data && props.data}
      renderItem={renderItem}
      ListFooterComponent={() => <View style={{height: 60}}></View>}
      // keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.green,
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginBottom: 15,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  shape: {
    position: 'absolute',
    height: '219%',
    width: '50%',
    resizeMode: 'contain',
    right: -29,
    tintColor: '#4274FF',
    top: 0,
  },
  splitterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  fullwidth: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '50%',
    borderRadius: 20,
    alignItems: 'flex-start',
  },
  btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get('screen').width - 100,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
  },
});
