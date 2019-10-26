import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import styles from './styles';

export default class App extends Component {
  state = {
    mapRegion: null,
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, Veuillez réessayer!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission d\'accès refusée!',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
  };

  render() {
    let text = <ActivityIndicator size="large" color="#00ff00" />;
    if (this.state.errorMessage) {
      text = <Text style={styles.paragraph}>{this.state.errorMessage}</Text>;
    } else if (this.state.location) {
      //text = <Text style={styles.paragraph}>{JSON.stringify(this.state.location)}</Text>;
      text=<MapView style={styles.mapStyle} 
                showsUserLocation={true}
                provider={MapView.PROVIDER_GOOGLE}
                showsMyLocationButton={true}        
                initialRegion={this.state.mapRegion}
                onRegionChange={this._handleMapRegionChange}
            />
    }

    return (
      <View style={styles.container}>
        {text}
      </View>
    );
  }
}