import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Welcome extends Component {
    render(){
        return (
            <View style={{...styles.container, marginTop: -2 *height/3 }}>
                <Image 
                    source={require("../../images/Logo/logo.png")}
                    style={{height: 100, width:100, borderRadius: 50}}
                />
                <Text 
                style={{fontSize: 30, 
                        fontWeight: "bold",
                    color: "white"}}
                >Bienvenue sur EasyGame</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    }
});