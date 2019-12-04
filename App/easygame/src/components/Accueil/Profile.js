import React, {Component} from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';

export default class Profile extends Component {

  deconnexion = () => {
    global.utilisateur = {};
    NavigationService.navigate('HomePage');
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1,}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
        <ScrollView>
          <View style={{alignSelf: "center", marginBottom: 20}}>
            <View style={styles.profileImage}>
              <Image source={require('../../images/Logo/logo.png')} style={styles.image} resizeMode="center"></Image>
            </View>
          </View>

          <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                onPress={() => NavigationService.navigate("Agenda")}
              >
                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                  Agenda
                </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                onPress={() => NavigationService.navigate("SelectDevices")}
              >
                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                  Geolocation
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                onPress={()=> NavigationService.navigate("Settings")}
              >
                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                  Configuration 
                </Text>
              </TouchableOpacity>    


          <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                onPress={this.deconnexion}
              >
                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                  Deconnexion
                </Text>
              </TouchableOpacity>

        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
