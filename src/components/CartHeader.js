import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {color, parameters} from '../global/Styles';

export default class CartHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.header}>
        {/* Header Component */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
            position: 'absolute',
            left: 10,
          }}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={color.cardbackground}
            size={32}
            onPress={() => {
              this.props.props.navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: color.cardbackground,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            CART
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.buttons,
    // height: parameters.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
