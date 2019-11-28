import React, {Component} from 'react';
import {Text,Alert, View, Dimensions, Image, ScrollView, Picker, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';
import Animated from "react-native-reanimated";


const { width, height } = Dimensions.get('window');

export default class SelectDevices extends Component {

    constructor(){
        super();
        this.state = {
            device : null,
            responseApi : null,
            pickersItem : null
        };
        
    }

    getStars = () => new Promise((resolve) => {
        setTimeout(() => resolve, 2000)
    })

    getDevices =  async(email) => {
        const response = await fetch('http://easygame.funndeh.com:5000/api/Devices/getDevices', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    proprietaire: email
                                })
                            });
        this.state.position = await response.json();    
        this.getStars();                
                                        
    }

    getDataGeo = async () => {
        const response = await fetch('http://easygame.funndeh.com:5000/api/position/getLastPosition', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    nom: this.state.device
                                })
                            });
        console.log(response);
        NavigationService.navigate("Geolocation");

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

                    <Picker
                        selectedValue={this.state.device}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({device: itemValue})
                        }
                    >
                        <Picker.Item label="Seletionnez le device" value=""/>
                        <Picker.Item label="MANOU1" value="MANOU1"/>
                    </Picker>
                    
                                    
                        <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                            onPress={() => {
                                this.getDataGeo()

                            }}
                        >
                            <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>
                                Charger mes devices
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00', color:'white'}}
                            onPress={this.getDataGeo}
                        >
                            <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>
                                Donner la position
                            </Text>
                        </TouchableOpacity>

                    </Animated.View>
                </ScrollView>
            </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
