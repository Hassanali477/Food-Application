import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {color} from '../global/Styles';
import {Icon, CheckBox, Button} from 'react-native-elements';
import {menuDetailedData} from '../global/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import MenuCard from '../components/MenuCard';

class PrefrencesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefrences:
        menuDetailedData[this.props.route.params.index].preferenceData,
      required: menuDetailedData[this.props.route.params.index].required,
      minimum_quatity:
        menuDetailedData[this.props.route.params.index].minimum_quatity,
      counter: menuDetailedData[this.props.route.params.index].counter,
      data: menuDetailedData[this.props.route.params.index],
      quantity: 1,
    };
  }
  onPlus = () => {
    var {quantity} = this.state;
    quantity = quantity + 1;
    this.setState({quantity});
  };
  onMinus = () => {
    var {quantity} = this.state;
    quantity = quantity - 1;
    if (quantity < 1) {
      quantity = 1;
    }
    this.setState({quantity});
  };
  handleAddToCart = index => {
    var {
      actions,
      userData: {cartitems},
    } = this.props;
    const {meal, details, price} = menuDetailedData[index];
    var obj = {
      productName: meal,
      image: this.props.route.params.image,
      price: price,
      orignelPrice: price,
      productDetails: details,
      quantity: this.state.quantity,
    };
    cartitems.push(obj);
    actions.cartItems(cartitems);
    AsyncStorage.setItem('cartitems_key', JSON.stringify(cartitems));
  };

  render() {
    const index = this.props.route.params.index;
    const {meal, details, price} = menuDetailedData[index];

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              style={styles.backgroundImage}
              source={{
                uri: this.props.route.params.image,
              }}
            />
          </View>

          <View style={styles.view12}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={color.cardbackground}
              size={30}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.view1}>
            <Text style={styles.text1}>{meal}</Text>
            <Text style={styles.text2}>{details}</Text>
          </View>
          {/* <View style={styles.view2}>
            <Text style={styles.text3}>Choose a meal type</Text>
            <View style={styles.view3}>
              <Text style={styles.text4}>REQUIRED</Text>
            </View>
          </View> */}
          <View style={styles.view4}>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <CheckBox
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  checkedColor={color.buttons}
                />
                <Text style={styles.text5}>Price</Text>
              </View>
              <Text style={styles.text6}>PKR{price.toFixed(2)}</Text>
            </View>
          </View>
          <View
            style={[
              styles.view4,
              {paddingHorizontal: 20, paddingVertical: 20},
            ]}>
            <Text style={[styles.text5, {fontWeight: '900', fontSize: 16}]}>
              MORE ITEMS
            </Text>
          </View>

          <View style={styles.view2}>
            <FlatList
              style={{backgroundColor: 'white'}}
              data={menuDetailedData}
              // horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('PrefrencesScreen', {
                      image: item.image,
                      index,
                    });
                  }}>
                  <MenuCard
                    productName={item.meal}
                    image={item.image}
                    price={item.price}
                    productDetails={item.details}
                  />
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <View style={styles.view13}>
          <Text style={styles.text11}>Quantity</Text>
        </View>
        <View style={styles.view14}>
          <TouchableOpacity
            style={styles.view15}
            onPress={() => this.onMinus()}>
            <Icon name="remove" type="material" color={'black'} size={30} />
          </TouchableOpacity>
          <Text style={styles.text9}>{this.state.quantity}</Text>
          <TouchableOpacity style={styles.view16} onPress={() => this.onPlus()}>
            <Icon name="add" type="material" color={'black'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.view17}>
          <View style={styles.view18}>
            <TouchableOpacity onPress={() => this.handleAddToCart(index)}>
              <Text style={styles.text10}>Add to Cart </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(PrefrencesScreen);

const styles = StyleSheet.create({
  container: {flex: 1},
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: color.buttons,
    overflow: 'hidden',
  },
  subHeader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  backgroundImage: {
    width: '100%', //null,
    height: 400, //HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    // marginTop: Platform.OS === 'ios' ? 28 : 38,
    // height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    //paddingTop: Platform.OS !== 'ios' ?
    //HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: {backgroundColor: 'white', padding: 10, marginBottom: 10},

  text1: {fontSize: 15, color: color.grey1, fontWeight: 'bold'},

  text2: {fontSize: 14, color: color.grey2, marginTop: 5},
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.grey1,
    marginLeft: 10,
  },

  view3: {
    borderWidth: 3,
    borderColor: color.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text4: {fontWeight: 'bold', color: color.grey3, padding: 5},

  view4: {backgroundColor: 'white', marginBottom: 10},
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  view6: {flexDirection: 'row', alignItems: 'center'},
  text5: {fontWeight: 'bold', marginLeft: -10, color: color.grey2},
  text6: {fontSize: 16, fontWeight: 'bold', color: color.grey1},

  view7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text8: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.grey1,
    marginLeft: 10,
  },

  view9: {
    borderWidth: 3,
    borderColor: color.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text7: {fontWeight: 'bold', color: color.grey3, padding: 5},

  view10: {backgroundColor: 'white', marginBottom: 10},

  view11: {flexDirection: 'row', alignItems: 'center'},

  view12: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(52,52,52,0.6)',
    borderRadius: 50,
    padding: 5,
  },

  view13: {
    paddingBottom: 0,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: color.grey6,
  },

  text11: {
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: color.grey1,
    paddingVertical: 5,
  },

  view14: {
    flexDirection: 'row',
    backgroundColor: color.cardbackground,
    paddingVertical: 5,
    marginBottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: color.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text9: {fontWeight: 'bold', fontSize: 18, color: 'black'},
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: color.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view17: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.cardbackground,
    marginTop: -5,
  },

  view18: {
    backgroundColor: color.buttons,
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 0,
    width: 320,
    borderRadius: 12,
  },

  text10: {padding: 10, fontWeight: 'bold', fontSize: 18, color: 'black'},

  view19: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});
