import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {color, parameters} from '../global/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default function FoodCard({
  restaurantName,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
  navigation,
}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ClientStack')}>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image style={{...styles.image, width: screenWidth}} source={images} />
        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.distance}>
                <Icon
                  name="place"
                  type="material"
                  color={color.grey2}
                  size={18}
                  iconStyle={{
                    marginTop: 3,
                  }}
                />
                <Text style={styles.Min}>{farAway} Min</Text>
              </View>
              <View style={{flex: 9, flexDirection: 'row'}}>
                <Text style={styles.address}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: color.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
    // width: SCREEN_WIDTH ,
    resizeMode: 'cover',
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: color.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: color.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: color.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: color.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52, 52, 52,0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: 'white',
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0,
  },
});
