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
              paddingVertical: 15,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://img.freepik.com/free-vector/hand-drawn-design-world-food-day_23-2148648454.jpg?w=740&t=st=1704353381~exp=1704353981~hmac=06de3a980199cd40660d1b460de18fe0cbe02b98285e1d55e3b6aeb7f519c838',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.ProfileText}>Food Fest</Text>
              <Text style={styles.ProfileEmail}>Foodie@oulook.com</Text>
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
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
        <View style={{borderTopColor: color.grey5, borderTopWidth: 1}}>
          <Text style={styles.prefreneces}>Prefreneces</Text>
          <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
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
