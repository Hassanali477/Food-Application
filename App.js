import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

import {color, parameters} from './src/global/Styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

const App = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={color.statusbar} />
      <SignInScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
