import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {color} from '../global/Styles';
import {Icon} from 'react-native-elements';
import ProductCard from './ProductCard';

const SearchResultCard = ({
  images,
  numberOfReview,
  averageReview,
  restaurantName,
  farAway,
  businessAddress,
  productData,
  onPressRestaurantCard,
  navigation,
}) => {
  console.log(navigation, 'dasd');
  return (
    <View>
      <TouchableOpacity onPress={onPressRestaurantCard}>
        <View style={styles.view1}>
          <View style={{height: 150}}>
            <ImageBackground
              style={{height: 160}}
              source={images}
              imageStyle={styles.imageStyle}
            />
            <View style={styles.image}>
              <Text style={styles.text1}>{averageReview}</Text>
              <Text style={styles.text2}>{numberOfReview} reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={{paddingTop: 5}}>
            <Text style={styles.text5}>{restaurantName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.view4}>
              <Icon
                name="place"
                type="material"
                color={color.CardComment}
                size={18}
                iconStyle={{marginTop: 3}}
              />
              <Text style={styles.view5}>{farAway} Min</Text>
            </View>
            <View style={{flex: 9}}>
              <Text style={styles.text6}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 5, paddingBottom: 20}}>
        <TouchableOpacity>
          <FlatList
            contentContainerStyle={{paddingBottom: '10%'}}
            style={{backgroundColor: color.cardbackground, marginLeft: 5}}
            data={productData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <ProductCard
                image={item.image}
                name={item.meal}
                price={item.price}
                index={index}
                navigation={navigation}
              />
            )}
            horizontal={true}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  view1: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52,0.4)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },

  imageStyle: {borderTopLeftRadius: 5, borderTopRightRadius: 5},

  text1: {color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: -3},

  text2: {color: 'white', fontSize: 13, marginRight: 0, marginLeft: 0},

  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
  },
  text3: {
    fontSize: 10,
    fontWeight: 'bold',
    color: color.grey2,
  },

  text4: {
    fontSize: 10,
    fontWeight: 'bold',
    color: color.grey2,
  },
  view3: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginTop: 10,
  },

  text5: {
    fontSize: 17,
    fontWeight: 'bold',
    color: color.grey1,
    marginLeft: 9,
  },

  view4: {
    flex: 4,
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: color.grey4,
    paddingHorizontal: 5,
  },

  view5: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: color.grey3,
  },

  text6: {
    fontSize: 12,
    paddingTop: 5,
    color: color.grey3,
    paddingHorizontal: 10,
  },
});
