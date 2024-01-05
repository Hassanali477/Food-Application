import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {color, parameters} from '../../global/Styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {SignInContext} from '../../contexts/authcontext';
import auth from '@react-native-firebase/auth';

export default function SignInWelcomeScreen({navigation}) {
  const {dispatchSignedIn} = useContext(SignInContext);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      } else {
        dispatchSignedIn({type: 'UPDATE_SIGN_IN', payload: {userToken: null}});
      }
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: color.buttons,
            fontWeight: 'bold',
          }}>
          DISCOVER RESTAURENTS
        </Text>
        <Text style={{fontSize: 26, color: color.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide2}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../Assets/swiperSecondImg.jpg')}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../Assets/swiperThirdImg.jpg')}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../Assets/swiperFourthImg.jpg')}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => [navigation.navigate('SignUpScreen')]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: color.buttons,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: color.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
