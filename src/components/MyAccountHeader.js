import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {color, parameters} from '../global/Styles';

const MyAccountHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
          position: 'absolute',
          left: 10,
        }}>
        {/* <Icon
    type="material-community"
    name="arrow-left"
    color={color.cardbackground}
    size={32}
    onPress={() => {
      navigation.goBack()
    }}
  /> */}
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: color.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.buttons,
    // height: parameters.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default MyAccountHeader;
