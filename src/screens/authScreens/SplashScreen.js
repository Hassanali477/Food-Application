import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  NativeModules,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../../global/Styles';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const {
  StatusBarManager: {HEIGHT},
} = NativeModules;

const SplashScreen = props => {
  const [stColor, setStColor] = useState('black');
  useEffect(() => {
    setTimeout(() => {
      setStColor(color.statusbar);
      setTimeout(() => {
        props.navigation.navigate('SignInWelcomeScreen');
      }, 10);
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={stColor} />
      <Image
        source={require('../../Assets/launch_screen.jpg')}
        style={{width: 400, height: 550}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
