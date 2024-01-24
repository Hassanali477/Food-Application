import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import MyAccountHeader from '../components/MyAccountHeader';
import {Avatar, Button, Icon} from 'react-native-elements';
import {color} from '../global/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Screen_width = Dimensions.get('screen').width;
const Screen_height = Dimensions.get('screen').height;
const MyAccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MyAccountHeader />
      <View style={styles.subContainer}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size={200}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn6TY-wZh6PoeX-I5_b3a2hdVxN-HzejEhshhxqRhedI1hjwCzpfxNGkY6A&s',
          }}
        />
        <View style={styles.profileContainer}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={styles.profileHeading1}>
                Name : <Text style={{color: 'black'}}>Foodie</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileHeading2}>
                Email : <Text style={{color: 'black'}}>Foodie@outlook.com</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 350,
              borderWidth: 1,
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Icon
                name="home"
                type="material-community"
                size={25}
                style={{marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  padding: 5,
                  marginLeft: 5,
                  fontSize: 18,
                }}>
                Hello
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 350,
              borderWidth: 1,
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', flexDirection: 'row'}}
              onPress={() => navigation.navigate('CartItemsScreen')}>
              <Icon
                name="cart"
                type="material-community"
                size={25}
                style={{marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  padding: 5,
                  marginLeft: 5,
                  fontSize: 18,
                }}>
                Cart
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 350,
              borderWidth: 1,
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="search"
                type="material"
                size={25}
                style={{marginLeft: 10}}
              />
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    marginLeft: 5,
                    fontSize: 18,
                  }}
                  onPress={() => navigation.navigate('SearchScreen')}>
                  Search
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  subContainer: {
    flex: 1,
    width: Screen_width,
    height: Screen_height,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 1,
    borderColor: color.cardbackground,
  },
  profileContainer: {
    padding: 10,
    // borderWidth: 1,
    marginTop: 15,
    width: Screen_width - 40,
    // height:Screen_height - 100
    height: 450,
    borderRadius: 20,
    // backgroundColor:color.buttons
  },
  profileHeading1: {
    fontSize: 20,
    color: color.buttons,
    // borderWidth: 1,
    paddingHorizontal: 20,
  },
  profileHeading2: {
    fontSize: 20,
    color: color.buttons,
    marginTop: 15,
    // borderWidth: 1,
    paddingHorizontal: 20,
  },

  profileContainer2: {
    // marginVertical: 20,
    marginTop: 15,
    alignItems: 'center',
    // marginHorizontal:10,
    // flexDirection:'row',
  },
  profileText1: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  profileText2: {
    fontSize: 20,
    color: 'black',
  },
});
