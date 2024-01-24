import {StyleSheet, FlatList, Text, View, Dimensions} from 'react-native';
import React from 'react';
import SearchResultCard from '../components/SearchResultCard';
import {color} from '../global/Styles';
import {restaurantsData} from '../global/Data';
import {menuDetailedData} from '../global/Data';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchResultScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{backgroundColor: color.cardbackground, marginLeft: 5}}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={menuDetailedData}
              navigation={navigation}
              onPressRestaurantCard={() => {
                navigation.navigate('RestaurantHomeScreen', {
                  id: index,
                  restaurant: item.restaurantName,
                });
              }}
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.listHeader}>
                {restaurantsData.length} Result for {route.params.item}
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    color: color.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight: 'bold',
  },
});
