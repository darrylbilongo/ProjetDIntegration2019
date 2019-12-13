import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export default class Project extends Component {

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
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
