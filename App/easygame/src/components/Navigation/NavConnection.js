import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
 

import Profile from '../Accueil/Profile';
import Planning from '../Admin/Agenda';
import Geo from '../Geolocation/Geo';
import SelectDevices from '../Geolocation/SelectDevices';
import Settings from '../Settings/Settings';

import CustomSidebarMenu from './CustomSidebarMenu';
 
global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../../images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const Profile_Fenetre = createStackNavigator({
  First: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Accueil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#003d00',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Admin_fenetre = createStackNavigator({
  Second: {
    screen: Planning,
    navigationOptions: ({ navigation }) => ({
      title: 'Agenda',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#62bd0d',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Geo_Fenetre = createStackNavigator({
  Third: {
    screen: SelectDevices,
    navigationOptions: ({ navigation }) => ({
      title: 'Geolocalisation',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#509556',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Settings_Fenetre = createStackNavigator({
    Third: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        title: 'Configuration',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#728a5e',
        },
        headerTintColor: '#fff',
      }),
    },
  });

const drawerNavigator = createDrawerNavigator(
  {
    Home: {
        screen: Profile_Fenetre,
        navigationOptions: {
            drawerLabel: 'Accueil',
        },
    },
    Settings: {
        screen: Settings_Fenetre,
        navigationOptions: {
          drawerLabel: 'Configuration',
        },
    },
    Agenda: {
        screen: Admin_fenetre,
        navigationOptions: {
            drawerLabel: 'Agenda',
        },
    },
    Geo: {
        screen: Geo_Fenetre,
        navigationOptions: {
            drawerLabel: 'Geolocation',
        },
    },
  },
  {
        contentComponent: CustomSidebarMenu,
        drawerWidth: Dimensions.get('window').width - 130,
  }
);

const container = createAppContainer(drawerNavigator);

export default container;