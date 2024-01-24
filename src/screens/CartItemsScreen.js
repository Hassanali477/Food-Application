import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {Icon, Image, withBadge} from 'react-native-elements';
import {color, parameters} from '../global/Styles';
import {menuDetailedData} from '../global/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import MenuCard from '../components/MenuCard';
import CartHeader from '../components/CartHeader';

const width = Dimensions.get('screen').width;
class CartItemsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      key: 0,
    };
  }
  componentDidMount = () => {
    this.calculateTotal();
  };
  calculateTotal = () => {
    var {
      userData: {cartitems},
    } = this.props;

    var total = 0;

    for (let i = 0; i < cartitems.length; i++) {
      total += cartitems[i].price * cartitems[i].quantity;
    }

    this.setState({total: total});
  };
  deleteCartItem = index => {
    var {
      userData: {cartitems},
      actions,
    } = this.props;
    this.state.total -= cartitems[index].price;
    this.setState({total: this.state.total});
    cartitems.splice(index, 1);
    actions.cartItems(cartitems);
  };
  onPlus = index => {
    var {
      userData: {cartitems},
      actions,
    } = this.props;
    cartitems[index].quantity = cartitems[index].quantity + 1;
    cartitems[index].price =
      cartitems[index].orignelPrice * cartitems[index].quantity;
    actions.cartItems(cartitems);
    this.setState({total: 0, key: this.state.key + 1});
    this.calculateTotal();
  };
  onMinus = index => {
    var {
      userData: {cartitems},
      actions,
    } = this.props;

    if (cartitems[index].quantity <= 1) {
      // Optionally handle a minimum quantity case here
    } else {
      cartitems[index].quantity = cartitems[index].quantity - 1;
      cartitems[index].price =
        cartitems[index].orignelPrice * cartitems[index].quantity;
      actions.cartItems(cartitems);
      this.setState({total: 0, key: this.state.key + 1});
      this.calculateTotal();
    }
  };

  render() {
    var {
      userData: {cartitems},
    } = this.props;
    return (
      <>
        <CartHeader props={this.props} />
        <View style={styles.container}>
          <View style={styles.view2}>
            <FlatList
              data={cartitems}
              vertical={true}
              // key={this.state.key}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{paddingBottom: '40%'}}
              renderItem={({item, index}) => {
                // console.log(item,'checking item')
                return (
                  <View
                    style={{
                      width: width - 20,
                      alignSelf: 'center',
                      backgroundColor: 'white',
                      borderRadius: 20,
                      overflow: 'hidden',
                      marginVertical: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('PrefrencesScreen', {
                          image: item.image,
                          index,
                        });
                      }}>
                      <Image
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={{width: width, height: 220}}
                      />
                    </TouchableOpacity>
                    <Text style={{color: 'black'}}>{item.productName}</Text>
                    <Text style={{color: 'black'}}>{item.productDetails}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        marginBottom: 10,
                      }}>
                      <View style={{flexDirection: 'row', paddingVertical: 10}}>
                        <TouchableOpacity
                          style={styles.view15}
                          onPress={() => this.onMinus(index)}>
                          <Icon
                            name="remove"
                            type="material"
                            color={'black'}
                            size={30}
                          />
                        </TouchableOpacity>
                        <Text style={styles.text9}>{item.quantity}</Text>
                        <Text
                          style={{
                            color: 'black',
                            marginHorizontal: 10,
                            fontSize: 20,
                          }}>
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          style={styles.view16}
                          onPress={() => this.onPlus(index)}>
                          <Icon
                            name="add"
                            type="material"
                            color={'black'}
                            size={30}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginTop: 20,
                          flexDirection: 'row',
                          marginHorizontal: 10,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Price
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            marginLeft: 10,
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          {item.price.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.deleteCartItem(index)}
                      style={{
                        position: 'absolute',
                        zIndex: 10,
                        right: 15,
                        top: 15,
                        bottom: 0,
                      }}>
                      <Icon
                        name="close"
                        type="material"
                        style={{
                          color: 'black',
                          backgroundColor: 'white',
                          borderRadius: 20,
                          padding: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.totalPrice}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Total: PKR {this.state.total.toFixed(2)}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('CheckOutScreen', {
                total: this.state.total,
              })
            }>
            <Text style={styles.checkOutBtn}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(CartItemsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width,
  },
  view2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    marginTop: 20,
  },
  totalPrice: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 70,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: color.grey5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkOutBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: color.buttons,
    padding: 8,
    borderRadius: 50,
  },
});
