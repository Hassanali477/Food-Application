import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  LogBox,
  Image,
  FlatList,
  Footer,
  TouchableOpacity,
} from 'react-native';
import CheckOutHeader from '../components/CheckOutHeader';
import {color} from '../global/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
const CheckOutScreen = props => {
  var {
    userData: {cartitems, myorder},
    actions,
    userData,
  } = props;
  const confirmOrder = () => {
    // Math.floor(Math.random() * 101);
    var obj = {
      order_id: Math.floor(Math.random() * 10000),
      created_at: new Date(),
      cartitems: cartitems,
      total: props.route.params.total,
      payment_type: 'Cash on delivery',
    };
    myorder.push(obj);
    actions.myOrder(myorder);
    AsyncStorage.setItem('myorders_key', JSON.stringify(myorder));
    props.navigation.navigate('HomeScreen')
  };
  return (
    <View style={styles.container}>
      <CheckOutHeader navigation={props.navigation} />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>ITEMS</Text>
        <View>
          <FlatList
            data={cartitems}
            vertical={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={styles.flatlistContainer}>
                  <Image
                    source={{uri: item.image}}
                    resizeMode="cover"
                    style={{width: 140, height: 130, borderRadius: 20}}
                  />
                  <View style={styles.flatlistContainerStyle}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item.productName}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      PKR {item.price}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item.quantity}
                    </Text>
                  </View>
                </View>
              );
            }}
            contentContainerStyle={{paddingBottom: '100%'}}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerHeading}>
          Total : {props.route.params.total.toFixed(2)}
        </Text>
        <Text style={styles.footerHeading}>Payment : Cash on delivery</Text>
        <TouchableOpacity
          style={styles.orderContainerButton}
          onPress={() => confirmOrder()} >
          <Text style={styles.OrderButton}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: color.buttons,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 60,
    fontSize: 25,
    fontWeight: 'bold',
  },
  flatlistContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 1,
    backgroundColor: color.buttons,
    padding: 20,
    borderRadius: 50,
  },
  flatlistContainerStyle: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  footerContainer: {
    position: 'absolute',
    // left:20,
    bottom: 0,
    width: '100%',
    height: 150,
    backgroundColor: 'white',
  },
  footerHeading: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  OrderButton: {
    backgroundColor: color.buttons,
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 20,
    padding: 10,
    fontSize: 20,
    borderRadius: 20,
    letterSpacing: 3,
    fontWeight: 'bold',
  },
});
