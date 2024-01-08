import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {color} from '../global/Styles';
import {Icon, CheckBox, Button} from 'react-native-elements';
import {menuDetailedData} from '../global/Data';
export default class PrefrencesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefrences:
        menuDetailedData[this.props.route.params.index].preferenceData,
      required: menuDetailedData[this.props.route.params.index].required,
      minimum_quatity:
        menuDetailedData[this.props.route.params.index].minimum_quatity,
      counter: menuDetailedData[this.props.route.params.index].counter,
    };
  }
  render() {
    const index = this.props.route.params.index;
    const {meal, details, price} = menuDetailedData[index];
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.subHeader}></View>
            <Image
              style={styles.backgroundImage}
              source={{
                uri: 'https://t3.ftcdn.net/jpg/05/89/70/46/360_F_589704609_b84XoVDaeopctL2Iz0lG4IQT86Dzm7xz.jpg',
              }}
            />
          </View>
          <View style={styles.bar}>
            <Text style={styles.title}>Choose a Prefrences</Text>
          </View>
          <View style={styles.view12}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={color.cardbackground}
              size={30}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.view1}>
            <Text style={styles.text1}>{meal}</Text>
            <Text style={styles.text2}>{details}</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text3}>Choose a meal type</Text>
            <View style={styles.view3}>
              <Text style={styles.text4}>REQUIRED</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <CheckBox
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  checkedColor={color.buttons}
                />
                <Text style={styles.text5}>- - - - - -</Text>
              </View>
              <Text style={styles.text6}>PKR{price.toFixed(2)}</Text>
            </View>
          </View>
          {/* <View style={styles.view2}>
            <Text style={styles.text3}>Choose a meal type</Text>
            <View style={styles.view3}>
              <Text style={styles.text4}>2 REQUIRED</Text>
            </View>
          </View> */}
          <View>
            {this.state.prefrences.map(item => (
              <View key={item.id}>
                <View style={styles.view7}>
                  <Text style={styles.text8}>
                    {
                      menuDetailedData[index].preferenceTitle[
                        this.state.prefrences.indexOf(item)
                      ]
                    }
                  </Text>
                  {this.state.required[this.state.prefrences.indexOf(item)] && (
                    <View style={styles.view9}>
                      <Text style={styles.text7}>
                        {
                          this.state.minimum_quatity[
                            this.state.prefrences.indexOf(item)
                          ]
                        }{' '}
                        REQUIRED
                      </Text>
                    </View>
                  )}
                </View>
                <View style={styles.view10}>
                  {item.map(items => (
                    <TouchableOpacity
                      key={items.id}
                      onPress={() => {
                        const id = this.state.prefrences.indexOf(item);
                        if (this.state.minimum_quatity[id] !== null) {
                          const check = item.filter(items =>
                            items.checked ? items : null,
                          );
                          this.state.prefrences[id].forEach(i => {
                            if (i.id === items.id) {
                              if (
                                check.length < this.state.minimum_quatity[id]
                              ) {
                                i.checked = !i.checked;
                              } else {
                                i.checked = false;
                              }
                            }
                          }),
                            (this.state.counter[id] =
                              this.state.counter[id] + 1),
                            this.setState({
                              prefrences: [...this.state.preferences],
                              counter: [this.state.counter],
                            });
                        } else {
                          this.state.prefrences[id].forEach(i => {
                            if (i.id === items.id) {
                              i.checked = !i.checked;
                            }
                          });
                          this.setState({
                            preferences: [...this.state.prefrences],
                          });
                        }
                      }}>
                      <View style={styles.view4}>
                        <View style={styles.view19}>
                          <View style={styles.view6}>
                            <CheckBox
                              center
                              checkedIcon="check-square-o"
                              uncheckedIcon="square-o"
                              checked={items.checked}
                              checkedColor={color.buttons}
                            />
                            <Text style={{color: color.grey2, marginLeft: -10}}>
                              {items.name}
                            </Text>
                          </View>
                          <Text style={styles.text6}>
                            PKR {items.price.toFixed(2)}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.view13}>
          <Text style={styles.text11}>Quantity</Text>
        </View>
        <View style={styles.view14}>
          <View style={styles.view15}>
            <Icon name="remove" type="material" color={'black'} size={30} />
          </View>
          <Text style={styles.text9}>1</Text>
          <View style={styles.view16}>
            <Icon name="add" type="material" color={'black'} size={30} />
          </View>
        </View>
        <View style={styles.view17}>
          <View style={styles.view18}>
            <Text style={styles.text10}>Add 1 to Cart PKR 299</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: color.buttons,
    overflow: 'hidden',
    height: 180, //HEADER_MAX_HEIGHT,
  },
  subHeader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  backgroundImage: {
    width: '100%', //null,
    height: 240, //HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    // marginTop: Platform.OS === 'ios' ? 28 : 38,
    // height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    //paddingTop: Platform.OS !== 'ios' ?
    //HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: {backgroundColor: 'white', padding: 10, marginBottom: 10},

  text1: {fontSize: 15, color: color.grey1, fontWeight: 'bold'},

  text2: {fontSize: 14, color: color.grey2, marginTop: 5},
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.grey1,
    marginLeft: 10,
  },

  view3: {
    borderWidth: 3,
    borderColor: color.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text4: {fontWeight: 'bold', color: color.grey3, padding: 5},

  view4: {backgroundColor: 'white', marginBottom: 10},
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  view6: {flexDirection: 'row', alignItems: 'center'},
  text5: {fontWeight: 'bold', marginLeft: -10, color: color.grey2},
  text6: {fontSize: 16, fontWeight: 'bold', color: color.grey1},

  view7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text8: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.grey1,
    marginLeft: 10,
  },

  view9: {
    borderWidth: 3,
    borderColor: color.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text7: {fontWeight: 'bold', color: color.grey3, padding: 5},

  view10: {backgroundColor: 'white', marginBottom: 10},

  view11: {flexDirection: 'row', alignItems: 'center'},

  view12: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(52,52,52,0.6)',
    borderRadius: 50,
    padding: 5,
  },

  view13: {
    paddingBottom: 0,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: color.grey6,
  },

  text11: {
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: color.grey1,
    paddingVertical: 5,
  },

  view14: {
    flexDirection: 'row',
    backgroundColor: color.cardbackground,
    paddingVertical: 5,
    marginBottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: color.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text9: {fontWeight: 'bold', fontSize: 18, color: 'black'},
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: color.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view17: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.cardbackground,
    marginTop: -5,
  },

  view18: {
    backgroundColor: color.buttons,
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 0,
    width: 320,
    borderRadius: 12,
  },

  text10: {padding: 10, fontWeight: 'bold', fontSize: 18, color: 'black'},

  view19: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});
