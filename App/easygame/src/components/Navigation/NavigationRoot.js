import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Accueil/Homescreen';
import Project from '../Admin/Project';
import Planning from '../Admin/Agenda';
import Enregistrer from '../Accueil/Enregistrer';
import Geo from '../Geolocation/index';
import container from '../Navigation/NavConnection';

const AppNavigator = createStackNavigator(
  {
    HomePage: {
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
    initialRouteName: 'HomePage',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;