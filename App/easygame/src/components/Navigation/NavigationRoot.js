import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Accueil/Homescreen';
import Profile from '../Accueil/Profile';
import Project from '../Admin/Project';
import Planning from '../Admin/Agenda';
import Enregistrer from '../Accueil/Enregistrer';
import {Dimensions} from 'react-native';
import Geo from '../Geolocation/index';
import container from '../Navigation/NavConnection';

const { width, height } = Dimensions.get('window');

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: container,
      navigationOptions:{
        header: null
      }
    },
    Register: {
        screen: Enregistrer,
        navigationOptions: {
            header: null
        }
    },
    Agenda: {
      screen: Planning,
      navigationOptions: {
        header: null,
      }
    },
    Project: {
      screen: Project,
      navigationOptions: {
        header: null,
      }
    },
    Geolocation: {
      screen: Geo,
      navigationOptions: {
        header: null,
      }
    },    
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;