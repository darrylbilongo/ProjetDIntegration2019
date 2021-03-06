import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Accueil/Homescreen';
import Project from '../Admin/Project';
import Planning from '../Admin/Agenda';
import Enregistrer from '../Accueil/Enregistrer';
import Geo from '../Geolocation/Geo';
import SelectDevices from '../Geolocation/SelectDevices';
import Accueil from '../Accueil/HomeMenu';
import container from '../Navigation/NavConnection';
import Settings from '../Settings/Settings';

const AppNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Accueil: {
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
    SelectDevices: {
      screen: SelectDevices,
      navigationOptions: {
        header: null,
      }
    },      
    Settings: {
      screen: Settings,
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