import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon} from 'react-native-elements';
import {color} from '../global/Styles';

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: color.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 15,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={require('../Assets/ProfileLogo.png')}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.ProfileText}>McDonald</Text>
              <Text style={styles.ProfileEmail}>Mcdonald@gmail.com</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
            }}>
            <View style={{marginVertical: 10}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: color.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text
                  style={{
                    color: color.cardbackground,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  My Favorites
                </Text>
              </View>
            </View>
            <View style={{marginVertical: 10}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: color.cardbackground,
                    fontSize: 18,
                  }}>
                  2
                </Text>
                <Text
                  style={{
                    color: color.cardbackground,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Shopping Cart
                </Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 2,
    borderColor: color.cardbackground,
  },
  ProfileText: {
    fontWeight: 'bold',
    color: color.cardbackground,
    fontSize: 18,
  },
  ProfileEmail: {
    color: color.cardbackground,
    fontSize: 14,
  },
});
