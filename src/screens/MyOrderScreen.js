import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MyOrderHeader from '../components/MyOrderHeader';
import {color} from '../global/Styles';
{
  /* {---------------Redux Imports------------} */
}
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';
import {bindActionCreators} from 'redux';
import {Touchable} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const MyOrderScreen = (props, navigation) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState('');
  var {
    userData: {myorder},
    actions,
    userData,
  } = props;
  return (
    <View style={styles.Container}>
      <MyOrderHeader navigation={navigation} />
      {/* <ScrollView> */}
      <View style={styles.mainContainer}>
        <FlatList
          data={myorder}
          vertical={true}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: '60%'}}
          renderItem={({item, index}) => {
            return (
              <View style={styles.flatlistContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.orderText}>
                    Order ID : {item.order_id}
                  </Text>
                  <Text style={styles.orderText}>
                    Date : {new Date(item.created_at).toLocaleString()}
                  </Text>
                  <Text style={styles.orderText}>
                    Total : {item.total} Rupees
                  </Text>
                  <Text style={styles.orderText}>
                    Payment Method : {item.payment_type}
                  </Text>
                </View>
                <View style={styles.detailContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setDetailData(item.cartitems);
                      setShowDetail(!showDetail);
                    }}>
                    <Text style={styles.detailText}>Detail</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      {showDetail && (
        <Pressable
          style={styles.detailFlatlistContainer}
          onPress={() => setShowDetail(false)}>
          <View style={styles.subCotainterFlatlist}>
            <FlatList
              data={detailData}
              vertical={true}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.flatlistContainer2}>
                    <Image
                      source={{uri: item.image}}
                      resizeMode="cover"
                      style={{width: 140, height: 130, borderRadius: 20}}
                    />
                    <View style={styles.flatlistContainerStyle}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                          width: 140,
                          marginTop: 30,
                        }}>
                        {item.productName}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        PKR {item.price}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        {item.quantity}
                      </Text>
                    </View>
                  </View>
                );
              }}
              contentContainerStyle={{paddingBottom: '100%'}}
            />
          </View>
        </Pressable>
      )}
      {/* </ScrollView> */}
    </View>
  );
};
{
  /* {---------------redux State ------------} */
}
const mapStateToProps = state => ({
  userData: state.userData,
});
{
  /* {---------------redux Actions ------------} */
}
const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyOrderScreen);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mainContainer: {
    // marginHorizontal:20,
    alignItems: 'center',
  },
  flatlistContainer2: {
    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 1,
    backgroundColor: color.buttons,
    marginHorizontal: 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    borderRadius: 50,
  },
  flatlistContainerStyle: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  subContainer: {
    marginTop: 20,
    height: 140,
    width: 390,
    padding: 20,
    paddingBottom: 25,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: color.buttons,
    borderRadius: 20,
  },
  orderText: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  detailContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  detailText: {
    color: color.buttons,
    // backgroundColor: color.buttons,
    backgroundColor: color.grey1,
    alignSelf: 'flex-end',
    padding: 10,
    fontSize: 20,
    borderRadius: 50,
    letterSpacing: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // fontWeight: 'bold',
  },
  detailFlatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 30,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    zIndex: 700,
  },
  subCotainterFlatlist: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH - 30,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});
