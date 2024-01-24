import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import RestaurantHeader from '../components/RestaurantHeader';
import {color, fonts} from '../global/Styles';
import {restaurantsData} from '../global/Data';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';
import MenuScreen from './RestaurantTabScreen/MenuScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;
const RestaurantHomeScreen = ({navigation, route}) => {
  const {id, restaurant} = route.params;
  const [index, setIndex] = useState(0);

  const UpdateRoute1 = () => {
    return <View></View>;
  };

  const menuPressed = () => {
    navigation.navigate('MenuProductScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantsData[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                Get {restaurantsData[id].discount}% OFF ON TOTAL FOOD
              </Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>
                {restaurantsData[id].restaurantName}
              </Text>
              <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
              <View style={styles.view4}>
                <Icon
                  name="star"
                  color={color.grey3}
                  type="material-community"
                  size={18}
                />
                <Text style={styles.text4}>
                  {restaurantsData[id].averageReview}
                </Text>
                <Text style={styles.text5}>
                  {restaurantsData[id].numberOfReview}
                </Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  size={15}
                  color={color.grey3}
                />
                <Text style={styles.text6away}>
                  {restaurantsData[id].farAway} mi away
                </Text>
              </View>
            </View>
          </View>
        </View>
        {index === 0 && <MenuScreen onPress={menuPressed} />}
      </ScrollView>
    </View>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},

  view1: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {color: 'green', fontSize: 14, fontWeight: 'bold'},

  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  view3: {flex: 8},

  text2: {fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 10},

  text3: {fontSize: 15, color: color.grey2},

  view4: {flexDirection: 'row', alignItems: 'center', marginTop: 5},

  text4: {
    // fontFamily: fonts.android.bold,
    fontSize: 13,
    color: color.grey3,
    marginLeft: 2,
  },

  text5: {
    // fontFamily: fonts.android.bold,
    fontSize: 13,
    color: color.grey3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6away: {
    // fontFamily: fonts.android.bold,
    fontSize: 15,
    color: color.grey3,
    marginLeft: 0,
  },
  view5: {
    flex: 3,
    alignItems: 'center',
  },
  text6: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.grey1,
  },
  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text7: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },

  text8: {fontSize: 13, color: 'black', marginBottom: 5},

  view8: {flex: 3, alignItems: 'center'},

  text9: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  view9: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text10: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.cardbackground,
    marginTop: 5,
  },

  text11: {fontSize: 13, color: 'black', marginBottom: 5},

  view10: {elevation: 10, backgroundColor: color.pagebackground},

  view11: {
    backgroundColor: color.buttons,
    height: 50,
    alignContent: 'center',
    marginBottom: 0,
    justifyContent: 'center',
  },

  view12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text12: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: color.cardbackground,
  },

  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: color.cardbackground,
    borderRadius: 6,
    paddingBottom: 2,
  },

  text13: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: color.cardbackground,
  },

  tab: {
    paddingTop: 0,
    backgroundColor: color.buttons,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {fontWeight: 'bold', color: color.cardbackground},

  tabStyle: {width: SCREEN_WIDTH / 4, maxHeight: 45},

  view14: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text14: {
    fontWeight: 'bold',
    marginLeft: 40,
    color: 'black',
    fontSize: 18,
  },

  view15: {marginTop: 5, paddingBottom: 20},
});
