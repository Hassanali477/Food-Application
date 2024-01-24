import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../contexts/authcontext';
import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon} from 'react-native-elements';
import {color} from '../global/Styles';

export default function DrawerContent(props) {
  const {dispatchSignedIn} = useContext(SignInContext);
  async function signOut() {
    try {
      auth()
        .signOut()
        .then(() => {
          console.log('working');
          console.log('USER SUCCESSFULLY SIGN OUT');
          dispatchSignedIn({
            type: 'UPDATE_SIGN_IN',
            payload: {userToken: null},
          });
        });
    } catch (error) {
      Alert.alert(error.code);
    }
  }
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: color.buttons, marginBottom: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 25,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn6TY-wZh6PoeX-I5_b3a2hdVxN-HzejEhshhxqRhedI1hjwCzpfxNGkY6A&s',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.ProfileText}>Food Fest</Text>
              <Text style={styles.ProfileEmail}>Foodie@outlook.com</Text>
            </View>
          </View>
          {/* <View
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
                  0
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
          </View> */}
        </View>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Search"
          icon={({color, size}) => (
            <Icon
              type="material"
              name="search"
              color={color}
              size={size}
            />
          )}
        /> */}
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => {
              signOut();
            }}
          />
        )}
      />
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
  prefreneces: {
    fontSize: 16,
    color: color.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: color.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
