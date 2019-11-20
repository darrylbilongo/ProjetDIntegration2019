import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
 
export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.logo =
      '../../images/Logo/logo.png';
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Profile',
        screenToNavigate: 'Home',
      },
      {
        navOptionThumb: 'list',
        navOptionName: 'Agenda',
        screenToNavigate: 'Agenda',
      },
      {
        navOptionThumb: 'location-on',
        navOptionName: 'Geolocation',
        screenToNavigate: 'Geo',
      },
      {
        navOptionThumb: 'settings',
        navOptionName: 'Configuration',
        screenToNavigate: 'Settings',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={require('../../images/Logo/logo.png')}
          style={styles.sideMenuProfileIcon}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'green' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 50,
  },
});