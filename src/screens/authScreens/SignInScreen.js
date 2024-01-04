import React, {useState, useRef, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {color, parameters} from '../../global/Styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import {AppState} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../../contexts/authcontext';

export default function SignInScreen({navigation}) {

  const {dispatchSignedIn} = useContext(SignInContext)
  const [textInput2Fosseud, setTextInput2Fosseud] = useState(false);
  const TextInput1 = useRef(1);
  const TextInput2 = useRef(2);

  const signIn = async data => {
    // console.log(auth(), 'Auth check');
    // try {
    const {password, email} = data;

    if (email.length <= 0) {
      return alert('email required');
    }
    if (password.length < 8) {
      return alert('password must be 8 characters');
    }

    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result) {
          dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:'signed-in'}})
        }
      })
      .catch(err => {
        alert('Incorrect credentials');
        console.log('login API error', err);
      });
  };

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={titleText}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signIn(values);
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              <View style={[styles.TextInput2, {marginBottom: 10}]}>
                <Animatable.View>
                  <Icon
                    name="person"
                    iconStyle={{color: color.grey3}}
                    type="material"
                  />
                </Animatable.View>
                <TextInput
                  style={{width: '90%', color: 'black'}}
                  placeholder="Email"
                  placeholderTextColor={'#bbb'}
                  ref={TextInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>
              <View style={styles.TextInput2}>
                <Animatable.View
                  animation={textInput2Fosseud ? '' : 'fadeInLeft'}
                  duration={300}>
                  <Icon
                    name="lock"
                    iconStyle={{color: color.grey3}}
                    type="material"
                  />
                </Animatable.View>
                <TextInput
                  style={{width: '80%', color: 'black'}}
                  placeholder="Password"
                  placeholderTextColor={'#bbb'}
                  secureTextEntry={true}
                  ref={TextInput2}
                  onFocus={() => {
                    setTextInput2Fosseud(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fosseud(true);
                  }}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <Animatable.View
                  animation={textInput2Fosseud ? '' : 'fadeInLeft'}
                  duration={300}>
                  <Icon
                    name="visibility-off"
                    iconStyle={{color: color.grey3}}
                    type="material"
                    style={{marginRight: 10}}
                  />
                </Animatable.View>
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forget Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          OR
        </Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 25}}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 25, marginLeft: 15}}>
        <Text style={{...styles.text1}}>New on Food Application ?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => [navigation.navigate('SignUpScreen')]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: color.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    color: color.text1,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
