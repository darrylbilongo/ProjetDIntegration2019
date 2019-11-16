import React, {Component} from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { MaterialIcons} from "@expo/vector-icons";
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
          <View style={{alignSelf: "center"}}>
            <View style={styles.profileImage}>
              <Image source={require('../../images/nouveau.jpg')} style={styles.image} resizeMode="center"></Image>
            </View>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View>

          <View style={styles.infoContainer}>
            <Text style={{fontSize: 30}}>{global.utilisateur.email}</Text>
            <Text>Email</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={{...styles.text, fontSize: 24, fontWeight: "200",}}>{global.utilisateur.prenom + ' ' + global.utilisateur.nom }</Text>
              <Text style={{...styles.text, ...styles.subText, color: "#AEB5BC", fontSize: 14}}>Nom</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
                <Text style={[styles.text, { fontSize: 24 }]}>{global.utilisateur.nomUtilisateur}</Text>
                <Text style={[styles.text, styles.subText]}>Utilisateur</Text>
            </View>
            <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                <Text style={[styles.text, { fontSize: 24 }]}>{global.utilisateur.totem}</Text>
                <Text style={[styles.text, styles.subText]}>Totem</Text>
            </View>
            <View style={styles.statsBox}>
                <Text style={[styles.text, { fontSize: 14 }]}>{global.utilisateur.fonction}</Text>
                <Text style={[styles.text, styles.subText]}>Fonction</Text>
            </View>
          </View>

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
