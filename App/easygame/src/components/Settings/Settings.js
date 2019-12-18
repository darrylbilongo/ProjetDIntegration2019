import React, {Component} from 'react';
import {Text,Alert, View, Dimensions, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';
import Animated from "react-native-reanimated";
import DatePicker from 'react-native-datepicker';
import * as SecureStore from 'expo-secure-store';
//import { decodeToken } from 'react-native-jsontokens'

const { width, height } = Dimensions.get('window');

export default class Config extends Component {

  constructor(){
    super();

    //const tokenData = decodeToken(token)
    this.state = {
        isLoading: false,
        nom : '',
        prenom : '',
        email : '',
        oldMotDePasse : '',
        newMotDePasse : '',
        dateNaissance : '',
    };

    this.motDePasse='';
}

verifMotDePasse = () => {
    if(this.state.newMotDePasse == this.motDePasse)
        return true
    else
        return false    
}

deleteCompte = async () => {
    const response = await fetch('https://easygame.funndeh.com/api/users/' + global.utilisateur._id, {
                                    method: 'DELETE',
                                    headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                    }
                                });
    this.responseAPI = await response.json()        
}

sendUpdate = async () => {
    this.state.isLoading = true;
    const response = await fetch('https://easygame.funndeh.com/api/users/update/' + global.utilisateur._id, {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({
                                nom : this.state.nom,
                                prenom : this.state.prenom,
                                email : this.state.email,
                                motDePasse : this.state.motDePasse,
                                dateNaissance : this.state.dateNaissance,
                                fonction : 'animateur',
                              })
                            });                             
    this.getStars();
    this.state.fonction = 'animateur';
    this.responseAPI = await response.json();  
}

updateCompte = () => {
    if(this.verifMotDePasse()){

    }
    else
        Alert("Mot de passe incorrect!!!")
}

delete = () => {
    this.deleteCompte();
    console.log(this.responseAPI);
    if(this.responseAPI){
        Alert.alert(this.responseAPI);
        global.utilisateur = {};  
        NavigationService.navigate('HomePage');   
    }     
}


  render() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#728a5e'}}>
          <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
            
            <ScrollView  style={{flex:1, backgroundColor: '#728a5e'}}>
                <Image style={{...styles.imgprofile, marginTop: height/10,
                    marginBottom: height/20,
                    marginLeft: width/3,
                    borderColor: '#003d00', borderRadius:50, borderWidth:1
                }} source={require("../../images/Logo/logo_transparent.png")}/>
                <Animated.View >
                    
                    <Text style={{...styles.mytext}}>Votre nom</Text>
                    <TextInput
                        placeholder={global.utilisateur.nom}
                        style={{...styles.textInput}}
                        onChangeText={nom=> this.setState({nom})}
                        autoCapitalize='words'
                        returnKeyType='next'
                        keyboardType={'default'}
                    />


                    <Text style={{...styles.mytext}}>Votre prenom</Text>
                    <TextInput
                        placeholder={global.utilisateur.prenom}
                        style={{...styles.textInput}}
                        onChangeText={prenom=> this.setState({prenom})}
                        autoCapitalize='words'
                        returnKeyType='next'
                        keyboardType={'default'}
                    />


                    <Text style={{...styles.mytext}}>Votre mail</Text>
                    <TextInput
                        placeholder={global.utilisateur.email}
                        style={{...styles.textInput, marginBottom: 15}}
                        onChangeText={email=> this.setState({email})}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'email-address'}
                    />

                    <Text style={{...styles.mytext}}>Votre date de naissance</Text>        
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.dateNaissance}
                        mode="date"
                        placeholder={global.utilisateur.dateNaissance.split('T')[0]}
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirmez"
                        cancelBtnText="Annulez"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                height: 50,
                                borderRadius: 20,
                                borderWidth: 0.5,
                                borderColor:'rgba(0,0,0, 0.5)',
                                fontStyle: 'italic'
                            }
                        }}
                        onDateChange={(date) => {this.setState({dateNaissance: date})}}
                    />    

                    {/*
                    <Text style={{...styles.mytext}}>Changer votre mot de passe</Text>
                    <TextInput
                        placeholder="Ancien mot de passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> {
                          this.state.oldMotDePasse = motPasse    
                      }}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />

                    <TextInput
                        placeholder="Nouveau mot de Passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> {
                            this.state.newMotDePasse = motPasse    
                        }}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />

                    <TextInput
                        placeholder="Réecriver le nouveau mot de Passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> {
                            this.motDePasse = motPasse    
                        }}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />*/}

                    {/*<TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                        onPress={this.updateCompte}
                    >
                        <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>
                            Mise à jour
                        </Text>
                    </TouchableOpacity>*/}


                    <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                        onPress={this.delete}
                    >
                        <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>
                            Suppression du compte
                        </Text>
                    </TouchableOpacity>

                </Animated.View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
  }
}
