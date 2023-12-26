import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {color, parameters} from '../global/Styles';
import {Icon} from 'react-native-elements';

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          type="material-community"
          name={type}
          color={color.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: color.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 25,
  },
});
