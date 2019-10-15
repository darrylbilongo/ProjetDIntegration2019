import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Homescreen';
import Profile from './Profile';
import NavigationService from './NavigationService';
import Enregistrer from './Enregistrer';
import {Dimensions} from 'react-native';

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
      screen: Profile,
      navigationOptions:{
        header: null
      }
    },
    Register: {
        screen: Enregistrer,
        navigationOptions: {
            header: null
        }
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;