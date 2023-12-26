import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {color, parameters} from '../global/Styles';

export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={color.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: color.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          ARE YOU HUNGRY ?
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={color.cardbackground}
          size={35}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
