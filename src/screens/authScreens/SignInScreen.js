import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {color, parameters} from '../../global/Styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen() {
  const [textInput2Fosseud, setTextInput2Fosseud] = useState(false);
  const TextInput1 = useRef(1);
  const TextInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={titleText}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={TextInput1}
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
            style={{width: '80%'}}
            placeholder="Password"
            ref={TextInput2}
            onFocus={() => {
              setTextInput2Fosseud(false);
            }}
            onBlur={() => {
              setTextInput2Fosseud(true);
            }}
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
});
