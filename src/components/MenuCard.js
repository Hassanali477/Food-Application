import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color} from '../global/Styles';

export default function MenuCard({productName, price, image, productDetails}) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>{productName}</Text>
          <View>
            <Text style={styles.text2}>{productDetails}</Text>
          </View>
          <Text style={styles.text3}>PKR {price}</Text>
        </View>
        <View style={{flex: 2}}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOpacity: 0.4,
    shadowColor: 'black',
    margin: 5,
    padding: 10,
  },

  view2: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'space-between',
  },

  view3: {flex: 6, justifyContent: 'space-between'},

  text1: {
    fontSize: 15,
    color: color.grey1,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    color: color.grey3,
    marginRight: 2,
  },

  text3: {
    fontSize: 15,
    color: color.grey2,
  },

  image: {flex: 1},
});
