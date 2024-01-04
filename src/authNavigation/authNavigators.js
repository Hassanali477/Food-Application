import React from 'react';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import RootClientTabs from './ClientTabs';
import SplashScreen from '../screens/authScreens/SplashScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      navigationOptions={{gesturesEnabled: false}}
      // initialRouteName="SignUpScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
      />

      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
     
    </Stack.Navigator>
  );
}
