import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {restaurantsData, menu} from '../global/Data';
import {color} from '../global/Styles';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from './MenuTabs';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MenuProductScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: color.cardbackground}}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );
  const menuPressed = () => {
    setModalVisible(true);
  };
  const renderScene = ({route}) => {
    switch (route.key) {
      case 1:
        return <Route1 navigation={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          name="arrow-left"
          type="material-community"
          size={29}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>Menu</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MenuProductScreen;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  container: {flex: 1, top: 0, left: 0, right: 0},

  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: color.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
  },

  text1: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
    fontSize: 22,
  },

  view2: {marginTop: 5, paddingBottom: 20},

  tab: {
    paddingTop: 0,
    backgroundColor: color.buttons,
    justifyContent: 'space-between',
    // alignItems:"center"
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {fontWeight: 'bold', color: color.cardbackground},

  tabStyle: {width: SCREEN_WIDTH / 4, maxHeight: 45},
  scene2: {backgroundColor: '#673ab7'},
});
