import React, {Component} from 'react';
import {Text,Alert, View, Dimensions, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';
import Animated from "react-native-reanimated";
import DatePicker from 'react-native-datepicker';

const { width, height } = Dimensions.get('window');

export default class Enregistrer extends Component {

    

    constructor(){

        global.utilisateur = {};

        super();

        this.state = {
            isLoading: false,
            nom : '',
            prenom : '',
            email : '',
            motDePasse : '',
            dateNaissance : '',
            estSupprime : '',
            totem : ''
        };

        this.motDePasse='';

        this.responseAPI = {message: ''};
    }


    handlePicker = (heures) => {
        hours= heures;

        this.setState({
            isVisible: false
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    getStars = () => new Promise((resolve) => {
        setTimeout(() => resolve, 2000)
    })


    verifierAge = (date) => {
        const current_date = new Date();
        const userDate = new Date(date);
        const age = new Number(((current_date.getTime() - userDate.getTime())/ 31536000000)).toFixed(0);

        if(age >= 25){
            this.responseAPI.message = 'Vous êtes trop agé pour être animateur!';
            return false;
        }
        else if(age <= 15){
            this.responseAPI.message = 'Vous êtes trop jeune pour être animateur!';
            return false
        }
        else{            
            return true;   
        } 
    }

    register = async () => {
        this.state.isLoading = true;
        const response = await fetch('http://easygame.funndeh.com:5000/api/users/register', {
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
                                    idAnimateur: this.state.email
                                  })
                                });                             
        this.getStars();
        this.responseAPI = await response.json();  
    }

    userRegister = () =>{
        if(!Object.keys(this.state).filter(x => this.state[x] != '')){
            this.responseAPI.message = 'Vous avez oublié de completer une donnée!';
        }
        else if(this.state.motDePasse !== this.motDePasse){
            this.responseAPI.message =  "Mots de passe incohérents!!!";
        }
        else if(this.state.motDePasse.length < 8){
            this.responseAPI.message = "Mot de passe trop court";
        }
        else{
            if(this.verifierAge(this.state.dateNaissance)){
                this.register();
                if(this.responseAPI.message && this.responseAPI.message.includes(' est enregistré')){
                    console.log(this.responseAPI);
                    global.utilisateur =this.responseAPI.utilisateur;
                    NavigationService.navigate('Profile');
                }
            }
        }

        if(this.responseAPI.message)
            Alert.alert(this.responseAPI.message);
        console.log(this.responseAPI.message);
        this.responseAPI.message = ''; 
    }

  render() {
    return (
        <SafeAreaView style={{flex: 1,}}>
          <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
            
            <ScrollView  style={{flex:1, backgroundColor: '#509556'}}>
                <Image style={{...styles.imgprofile, marginTop: height/10,
                    marginBottom: height/20,
                    marginLeft: width/3,
                    borderColor: '#003d00', borderRadius:50, borderWidth:1
                }} source={require("../../images/Logo/logo_transparent.png")}/>
                <Animated.View >

                    <TextInput
                        placeholder="Entrez votre Nom"
                        style={{...styles.textInput}}
                        onChangeText={nom=> this.setState({nom})}
                        autoCapitalize='words'
                        returnKeyType='next'
                        keyboardType={'default'}
                    />

                    <TextInput
                        placeholder="Entrez votre Prenom"
                        style={{...styles.textInput}}
                        onChangeText={prenom=> this.setState({prenom})}
                        autoCapitalize='words'
                        returnKeyType='next'
                        keyboardType={'default'}
                    />

                    <TextInput
                        placeholder="Entrez votre Mail"
                        style={{...styles.textInput, marginBottom: 15}}
                        onChangeText={email=> this.setState({email})}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'email-address'}
                    />
        
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.dateNaissance}
                        mode="date"
                        placeholder="Entrez votre date de naissance"
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

                    <TextInput
                        placeholder="Entrez votre mot de passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> this.motDePasse = motPasse}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />

                    <TextInput
                        placeholder="Recrivez votre mot de Passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> {
                            this.state.motDePasse = motPasse    
                        }}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                        onPress={this.userRegister}
                    >
                        <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>
                            Creer mon Compte
                        </Text>
                    </TouchableOpacity>

                </Animated.View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
  }
}
