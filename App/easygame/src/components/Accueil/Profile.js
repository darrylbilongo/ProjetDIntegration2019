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
                Manou Stévia
              </Text>
              <Text style={styles.username}>
                @manoustevia
              </Text>

              <View style={styles.itemProfile}>
                <Image style={styles.imgItem} source={require("../../images/etoile.png")}/>
                <Text style={styles.labelItem}>
                  Animateur
                </Text>
                <Text style={styles.subLabelItem}>
                  couleurFoulard
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
                  Loup
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
                  NavigationService.navigate('Agenda');
                }}
              >
                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                  Projet
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                onPress={()=>{
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
