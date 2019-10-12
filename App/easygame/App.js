import React, {Component} from 'react';
import Accueil from './src/components/Accueil'
import { SafeAreaView, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <SafeAreaView style={{flex:1,}}>
        <KeyboardAvoidingView style={{flex:1,}} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
          <ScrollView style={{flex:1,}}>
            <Accueil/>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
};