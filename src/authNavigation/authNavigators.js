import React from 'react';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SplashScreen from '../screens/authScreens/SplashScreen';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      navigationOptions={{gesturesEnabled: false}}
      // initialRouteName="DrawerNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      {
        <Stack.Screen
          name="SignInWelcomeScreen"
          component={SignInWelcomeScreen}
        />
      }
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
