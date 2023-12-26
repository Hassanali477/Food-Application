import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements';
import {color} from '../global/Styles';
import HomeScreen from '../screens/HomeScreen';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
// import DrawerContent from '../components/DrawerContent';
import DrawerContent from '../components/DrawerContent';

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
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? '#7cc' : color.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
