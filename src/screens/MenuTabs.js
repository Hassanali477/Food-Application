import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {menuData, menuDetailedData} from '../global/Data';
import React from 'react';
import MenuCard from '../components/MenuCard';

export function Route1() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity>
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
    </View>
  );
}

export const Route2 = () => <View style={styles.scene2} />;
export const Route3 = () => <View style={styles.scene2} />;
export const Route4 = () => <View style={styles.scene2} />;
export const Route5 = () => <View style={styles.scene2} />;
export const Route6 = () => <View style={styles.scene2} />;
export const Route7 = () => <View style={styles.scene2} />;
export const Route8 = () => <View style={styles.scene2} />;
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
  view2: {
    marginTop: 5,
    paddingBottom: 20,
  },
  scene2: {
    backgroundColor: 'red',
  },
});
