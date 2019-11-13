import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';

const { width, height } = Dimensions.get('window');

export default class Profile extends Component {

  render() {
    return (
          <ScrollView  style={{flex:1,}}>
            <View style={styles.container} >
              <Image style={styles.imgprofile} source={require("../../images/inconnu.png")}/>
              <Text style={styles.name}>
                {global.utilisateur.nom} {global.utilisateur.prenom}
              </Text>
              <Text style={styles.username}>
                @{global.utilisateur.nomUtilisateur}
              </Text>

              <View style={styles.itemProfile}>
                <Image style={styles.imgItem} source={require("../../images/etoile.png")}/>
                <Text style={styles.labelItem}>
                  Fonction
                </Text>
                <Text style={styles.subLabelItem}>
                  {global.utilisateur.fonction}
                </Text>
              </View>

              <View style={styles.itemProfile}>
                <Image style={styles.imgItem} source={require("../../images/etoile.png")}/>
                <Text style={styles.labelItem}>
                  Date de naissance
                </Text>
                <Text style={styles.subLabelItem}>
                  {global.utilisateur.dateNaissance}
                </Text>
              </View>

              <View style={styles.itemProfile}>
                <Image style={styles.imgItem} source={require("../../images/profile.png")}/>
                <Text style={styles.labelItem}>
                  Modifier le Profil
                </Text>
                <Text style={styles.subLabelItem}>
                  Eligible
                </Text>
              </View>

              <View style={styles.itemProfile}>
                <Image style={styles.imgItem} source={require("../../images/totem.png")}/>
                <Text style={styles.labelItem}>
                  Totem
                </Text>
                <Text style={styles.subLabelItem}>
                  {global.utilisateur.totem}
                </Text>
              </View>

              <View style={styles.itemProfile}>
                <Image style={styles.imgItem} source={require("../../images/notif.png")}/>
                <Text style={styles.labelItem}>
                  Notifications
                </Text>
                <Text style={styles.subLabelItem}>
                  0 messages
                </Text>
              </View>

              <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                onPress={()=>{
                  global.utilisateur = {};
                  NavigationService.navigate('Home');
                }}
              >
                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                  Deconnexion
                </Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
    );
  }
}
