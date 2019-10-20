import React from 'react';
import styles from './styles';
import {StyleSheet, Text, View} from 'react-native';

export default class Geo extends React.Component{

    constructor(){
        super();
        this.state = {
            ready: false,
            where: {
                lat: null, 
                lng: null
            },
            error: null,
        };
    }

    componentDidMount(){
        let geoOptions = {
            enableHighAccurary: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24
        };
        this.setState()
        navigator.geolocation.getCurrentPosition(this.geoSucess,
            this.geoFailure,
            geoOptions);
    }

    geoSucess = (position) => {

    }

    geoFailure = (err) => {
        this.setState({error: err.message});
    }

    render() {
        return(
            <View style={styles.container}>
                {this.state.ready && (
                    <Text>Test Geolocalisation</Text>
                )}
                {
                    this.state.error && (
                        <Text>
                            {this.state.error}
                        </Text>
                    )
                }
            </View>
        )
    }

}