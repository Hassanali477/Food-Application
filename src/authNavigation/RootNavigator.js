import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authNavigators';
import {AppStack} from './appStack';
import {SignInContext} from '../contexts/authcontext';

export default function RootNavigator() {
  const {signedIn} = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signedIn.userToken === null ? <AuthStack /> : <AppStack />}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}
