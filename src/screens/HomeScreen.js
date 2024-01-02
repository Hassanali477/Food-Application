import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {color, parameters} from '../global/Styles';
import {filterData, restaurantsData} from '../global/Data';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default function HomeScreen({navigation}) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={{backgroundColor: color.cardbackground, paddingBottom: 5}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? color.buttons : color.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantMapScreen');
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? color.grey5 : color.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type="material-community"
                name="map-marker"
                color={color.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5, color: 'black'}}>
                22 Beessie Street
              </Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={color.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5, color: 'black'}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={color.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.headerViewText}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSelected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerViewText}>
          <Text style={[styles.headerText, {paddingVertical: 10}]}>
            Free delivery now
          </Text>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.headerViewText}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.headerViewText}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>
        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantMapScreen');
            }}>
            <Icon
              name="place"
              type="material"
              size={32}
              color={color.buttons}
            />
            <Text style={{color: color.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: color.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    color: color.grey1,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerViewText: {
    backgroundColor: color.grey5,
    paddingVertical: 4,
    padding: 10,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: color.cardbackground,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  countDown: {
    color: color.grey3,
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 16,
    marginTop: 10,
    marginRight: 5,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: color.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: color.cardbackground,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: color.grey2,
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
});
