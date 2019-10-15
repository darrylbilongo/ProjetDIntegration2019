import React, {Component} from 'react';
import {Text, View, Dimensions, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from './NavigationService';
import Animated from "react-native-reanimated";

const { width, height } = Dimensions.get('window');

export default class Enregistrer extends Component {

  render() {
    return (
        <SafeAreaView style={{flex: 1,}}>
          <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
            
            <ScrollView  style={{flex:1, backgroundColor: '#509556'}}>
                <Animated.View style={{marginTop: width/3}}>
                    <TextInput
                        placeholder="Entrez votre Nom"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Entrez votre Prenom"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Entrez votre date de naissance"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Entrez votre Mail"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Entrez votre Totem"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Entrez votre Couleur"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Entrez votre mot de passe"
                        style={{...styles.textInput}}
                    />

                    <TextInput
                        placeholder="Recrivez votre mot de Passe"
                        style={{...styles.textInput}}
                    />

                    <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}>
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
