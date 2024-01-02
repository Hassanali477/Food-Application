import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar, LogBox} from 'react-native';
import {color} from './src/global/Styles';
import RootNavigator from './src/authNavigation/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={color.statusbar} />
      <RootNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
