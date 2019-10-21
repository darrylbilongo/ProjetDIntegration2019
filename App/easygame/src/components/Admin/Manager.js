import React, {Component} from 'react';
import {Text,Alert, View, Dimensions, Image, ScrollView, TextInput, Platform, KeyboardAvoidingView, SafeAreaView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../Navigation/NavigationService';
import Animated from "react-native-reanimated";

const { width, height } = Dimensions.get('window');

export default class Manager extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.Os == "ios" ? "padding" : "height" } enabled>
                    
                    <ScrollView  style={{flex:1, backgroundColor: '#509556'}}>
                        <TouchableOpacity>
                            <Text>Planifier</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </KeyboardAvoidingView>
            </SafeAreaView>        
        );
    }
}        