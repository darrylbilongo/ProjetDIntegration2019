import React, {Component} from 'react';
import {Text,Alert, View, Dimensions, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';
import Animated from "react-native-reanimated";

const { width, height } = Dimensions.get('window');

export default class Enregistrer extends Component {


    constructor(){
        super();

        this.state={
            nom: '',
            prenom: '',
            email: '',
            totem: '',
            motPasse: '',
        };
    }

    userRegister = () =>{
        const {nom, prenom, dateNaissance, email, totem, motPasse} = this.state;
     
        fetch('https://www.easygame.funndeh.com/nichtszusehen/index.php', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nom: nom,
                prenom: prenom,
                email: email,
                totem: totem,
                motPasse: motPasse
            })
        })
        .then((text) => {
            if (Platform.OS === 'android') {
              text = text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, ''); // If android , I've removed unwanted chars. 
            }
            return text;
          })
        .then((reponse) => reponse.text())
            .then((reponseJson) => {
                Alert.alert(reponseJson);
            })
            .catch((error) => {
                console.error(error);
            })
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
                        style={{...styles.textInput}}
                        onChangeText={email=> this.setState({email})}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'email-address'}
                    />

                    <TextInput
                        placeholder="Entrez votre Totem"
                        style={{...styles.textInput}}
                        onChangeText={totem=> this.setState({totem})}
                        autoCapitalize='words'
                        returnKeyType='next'
                        keyboardType={'default'}
                    />

                    <TextInput
                        placeholder="Entrez votre mot de passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> this.setState({motPasse})}
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />

                    <TextInput
                        placeholder="Recrivez votre mot de Passe"
                        style={{...styles.textInput}}
                        onChangeText={motPasse=> this.setState({motPasse})}
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
