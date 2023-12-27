import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Icon} from 'react-native-elements';
import {color} from '../global/Styles';

export default function SearchComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            style={styles.searchIcon}
            name="search"
            type="material"
            size={32}
            iconStyle={{marginLeft: 5}}
          />
          <Text style={{fontSize: 15, color: color.grey2}}>
            What are you looking for?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={{color: 'black'}}>Search Something</Text>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: color.grey3,
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: color.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: color.grey2,
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: color.grey2,
  },
  modal: {
    flex: 1,
  },
});
