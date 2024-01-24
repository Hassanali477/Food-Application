import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements';
import {color} from '../global/Styles';
import HomeScreen from '../screens/HomeScreen';
// import DrawerContent from '../components/DrawerContent';
import DrawerContent from '../components/DrawerContent';
import CartItemsScreen from '../screens/CartItemsScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import SearchScreen from '../screens/SearchScreen';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={RootClientTabs}
        options={{
          title: 'Home',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : color.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CartItemsScreen"
        component={CartItemsScreen}
        options={() => ({
          headerShown: false,
          title: 'Cart',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="cart"
              color={focussed ? '#7cc' : color.grey2}
              size={size}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
          title: 'Search',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="search"
              color={focussed ? '#7cc' : color.grey2}
              size={size}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={() => ({
          headerShown: false,
          drawerLabel: () => null,
        })}
      />
    </Drawer.Navigator>
  );
}
