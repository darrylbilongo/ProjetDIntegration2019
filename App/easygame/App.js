import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation-stack';
import DrawerNavigator from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'

import NavigationRoot from './src/components/NavigationRoot';
import NavigationService from './src/components/NavigationService';
import HomeScreen from './src/components/Homescreen'
import SettingsScreen from './src/components/SettingsScreen'

export default class App extends React.Component {
  render() {
    return <NavigationRoot
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        />;
    }
 }
// ERREUR INCOMPREHENSIBLE
// DrawerNavigator.create is not a function, is unedefined
// const MyApp = DrawerNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//  Settings:{
//     screen: SettingsScreen,
//   }
// })
