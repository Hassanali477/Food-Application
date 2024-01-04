import React from 'react';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const App = createStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <App.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  );
}
