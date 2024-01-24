import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import {filterData, menuDetailedData} from '../global/Data';
import {color} from '../global/Styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function SearchScreen({navigation}) {
  return (
    <View>
      <SearchComponent />
      <FlatList
        contentContainerStyle={{paddingBottom: '15%'}}
        data={filterData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('SearchResultScreen', {item: item.name});
            }}>
            <View style={styles.imageView}>
              <ImageBackground style={styles.image} source={item.image}>
                <View style={styles.textView}>
                  <Text
                    style={{
                      color: color.cardbackground,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text style={styles.listHeader}>Top Categories</Text>
        }
        ListFooterComponent={<Footer navigation={navigation} />}
      />
    </View>
  );
}

const Footer = ({navigation}) => {
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: '15%'}}
      data={menuDetailedData}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('SearchResultScreen', {item: item.name});
          }}>
          <View style={styles.imageView}>
            <ImageBackground style={styles.image} source={{uri: item.image}}>
              <View style={styles.textView}>
                <Text
                  style={{
                    color: color.cardbackground,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  {item.meal}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      )}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      ListHeaderComponent={
        <Text style={styles.listHeader}>More Categories</Text>
      }
    />
  );
};
const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },
});
