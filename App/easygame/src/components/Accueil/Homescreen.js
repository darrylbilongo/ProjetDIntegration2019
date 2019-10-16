import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import Accueil from './Accueil';
import { SafeAreaView } from 'react-navigation';


export default class HomeScreen extends React.Component {

  render() {
    return (
            <SafeAreaView style={{flex: 1}}>
              <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
                <ScrollView style={{flex: 1}}><Accueil /></ScrollView>
              </KeyboardAvoidingView>
            </SafeAreaView>
          );
  }
};

// export default HomeScreen
