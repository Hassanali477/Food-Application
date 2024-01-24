import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../global/Styles';

const ProductCard = ({name, price, image, index, navigation}) => {
  return (
    <View style={styles.view1}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PrefrencesScreen', {image: image, index});
        }}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.text1}>{name}</Text>
            <Text style={styles.text1}>PKR {price}</Text>
          </View>
          <View style={styles.view4}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOpacity: 0.4,
    shadowColor: 'black',
    margin: 5,
    marginTop: 30,
    width: 210,
    padding: 10,
  },

  view2: {flexDirection: 'row', padding: 0, justifyContent: 'space-between'},

  view3: {justifyContent: 'space-between', width: 110},

  text1: {
    fontSize: 15,
    color: color.grey1,
  },

  view4: {width: 75, height: 65},

  image: {height: 65, width: 75},
});
