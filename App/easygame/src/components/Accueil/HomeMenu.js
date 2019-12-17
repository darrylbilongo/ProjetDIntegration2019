import React, {Component} from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';



export default class Accueil extends Component {

  constructor(){
    super();

    global.utilisateur.agenda = [];
    this.state = {
      responseApi: ''
    };
  }

  deconnexion = () => {
    global.utilisateur = {};
    NavigationService.navigate('HomePage');
  }

  donnerAgenda = async () => {
    try{
      const response = await fetch('https://easygame.funndeh.com/api/event/getEvents', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({
                                userEmail: global.utilisateur.email
                              })
                            });                
      this.state.responseApi = await response.json();
    }
    catch (error){
      console.log(error);
    }
  }

  TraiterAgenda = () => {
    this.donnerAgenda();
    if(this.state.responseApi && this.state.responseApi != []){
      console.log(this.state.responseApi);
      global.utilisateur.agenda = this.state.responseApi;
      NavigationService.navigate("Agenda")
    }
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
                onPress={() => this.TraiterAgenda()}
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
