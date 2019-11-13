import React from 'react';
import NavigationRoot from './src/components/Navigation/NavigationRoot';
import NavigationService from './src/components/Navigation/NavigationService';
export default class App extends React.Component {
  render() {
    return (<NavigationRoot
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
    />);
    }
 }