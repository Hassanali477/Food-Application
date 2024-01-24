import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {menuData, menuDetailedData} from '../global/Data';
import React from 'react';
import MenuCard from '../components/MenuCard';

export function Route1({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PrefrencesScreen', {
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
    </View>
  );
}

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
