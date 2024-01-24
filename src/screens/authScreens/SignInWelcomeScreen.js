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
import AsyncStorage from '@react-native-async-storage/async-storage';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import {bindActionCreators} from 'redux';

function SignInWelcomeScreen(props) {
  const {dispatchSignedIn} = useContext(SignInContext);
  useEffect(async () => {
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
    var {actions} = props;
    var myOrderData = await AsyncStorage.getItem('myorders_key');
    if (myOrderData == undefined || myOrderData == null || myOrderData == '') {
    } else {
      actions.myOrder(JSON.parse(myOrderData));
    }

    var cartData = await AsyncStorage.getItem('cartitems_key');
    if (cartData == undefined || cartData == null || cartData == '') {
    } else {
      actions.cartItems(JSON.parse(cartData));
    }
    
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flex: 3,
          // justifyContent: 'flex-start',
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
        <View style={styles.slide2}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../Assets/swiperSecondImg.jpg')}
          />
        </View>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Login "
            buttonStyle={parameters.styledButton}
            titleStyle={[parameters.buttonTitle, {color: 'black'}]}
            onPress={() => {
              props.navigation.navigate('SignInScreen');
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => [props.navigation.navigate('SignUpScreen')]}
          />
        </View>
      </View>
    </View>
  );
}
{
  /* {---------------redux State ------------} */
}
const mapStateToProps = state => ({
  userData: state.userData,
});
{
  /* {---------------redux Actions ------------} */
}
const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInWelcomeScreen);

const styles = StyleSheet.create({
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
    backgroundColor: color.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: color.buttons,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
