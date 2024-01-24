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
import {
  filterData,
  restaurantsData,
  restaurantsData1,
  restaurantsData2,
} from '../global/Data';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default function HomeScreen({navigation, route}) {
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
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
                  navigation.navigate('ClientStack');
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
                    navigation={navigation}
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
            data={restaurantsData1}
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
                    navigation={navigation}
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
          {restaurantsData2.map(item => (
            <View
              key={item.id}
              style={{paddingBottom: 30, paddingVertical: 10}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                navigation={navigation}
              />
            </View>
          ))}
        </View>
      </ScrollView>
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

  headerText: {
    color: color.grey1,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 10,
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
