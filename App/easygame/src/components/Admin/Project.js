import React, {Component} from 'react';
import {Text,Alert, View, Dimensions, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';
import Animated from "react-native-reanimated";
import DateTimePicker from 'react-native-modal-datetime-picker';
import Planning from './Agenda';

const { width, height } = Dimensions.get('window');

export default class Project extends Component {


    hours = '';

    constructor(){
        super();
        this.state = {
            isVisible: false,
        }
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
                    
                    <ScrollView  style={{flex:1,}}>
                        
                        <Image style={{...styles.imgprofile, marginTop: height/10,
                            marginBottom: height/20,
                            marginLeft: width/3,
                            borderColor: '#003d00', borderRadius:50, borderWidth:1
                        }} source={require("../../images/Logo/logo_transparent.png")}/>
                        <Animated.View style={{flex:1,}}>
                            <Text>Nom de l'activité</Text>
                            <TextInput
                                style={{...styles.textInput}}
                                autoCapitalize='words'
                                returnKeyType='next'
                                keyboardType={'default'}
                            />
                            <Text>Date</Text>
                            <TextInput
                                style={{...styles.textInput}}
                                autoCapitalize='words'
                                returnKeyType='next'
                                keyboardType={'default'}
                            />

                            <Text>Heures</Text>
                            <TouchableOpacity  style={{...styles.button, backgroundColor: '#003d00'}}
                                onPress={this.showPicker}
                            >
                                <Text>Heures</Text>
                            </TouchableOpacity>   
                            <DateTimePicker 
                                isVisible={this.state.isVisible}
                                onConfirm={this.handlePicker}
                                onCancel={this.hidePicker}
                                mode={'datetime'}
                                is24Hour={true}
                             />                  
                            <TextInput
                                style={{...styles.textInput}}
                                autoCapitalize='words'
                                returnKeyType='next'
                                enabled={false}
                                keyboardType={'default'}
                            />

                            <Text>Lieu</Text>
                            <TextInput
                                style={{...styles.textInput}}
                                autoCapitalize='none'
                                returnKeyType='next'
                                keyboardType={'email-address'}
                            />

                            <Text>Participants</Text>
                            <TouchableOpacity  style={{...styles.button, backgroundColor: '#003d00'}}>
                                <Text>Ajouter scouts</Text>
                            </TouchableOpacity>

                            <Text>Outils</Text>
                            <TouchableOpacity style={{...styles.button, backgroundColor: '#003d00'}}>
                                <Text>Ajouter Outils</Text>
                            </TouchableOpacity>

                            <Text>Colleges</Text>
                            <TouchableOpacity style={{...styles.button, backgroundColor: '#003d00'}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>Ajouter Colleges</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{...styles.deconnexion, backgroundColor: '#003d00'}}
                                
                            >
                                <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>
                                    Ajouter
                                </Text>
                            </TouchableOpacity>

                        </Animated.View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
