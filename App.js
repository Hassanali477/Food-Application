import 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar, LogBox} from 'react-native';
import React from 'react';
import {color} from './src/global/Styles';
import RootNavigator from './src/authNavigation/RootNavigator';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';

const App = () => {
  LogBox.ignoreAllLogs();
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
