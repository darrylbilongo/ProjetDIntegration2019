import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import Font from 'expo-font';
import NavigationService from '../Navigation/NavigationService';



const { width, height } = Dimensions.get('window');

export default class Profile extends Component {

  deconnexion = () => {
    console.log("rien");
    global.utilisateur = {};
    NavigationService.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
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
      </SafeAreaView>
    );
  }
}
