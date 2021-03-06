import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, ActivityIndicator,  } from "react-native";
import { Container, Text } from "native-base";

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';


class Geo extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:0, //50.866606,
      cordLongitude: 0,//4.2994484,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
      location: null,
    };

    if(global.utilisateur.position){
      this.state.cordLatitude = global.utilisateur.position.latitude;
      this.state.cordLongitude = global.utilisateur.position.longitude;
      console.log(this.state.cordLongitude)
    }

    this.mergeLot = this.mergeLot.bind(this);

    this.componentDidMount();
  }

  componentDidMount() {
    this._isMounted = true;
    this.miseAjourPosition();

    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

    setInterval(()=> this.miseAjourPosition(), 30000)
   }

   getGeo = async () => {
    let response = await fetch('https://easygame.funndeh.com/api/positions/getLastPosition', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nom: global.utilisateur.device
                        })
                    });
    let responseJson = await response.json() ;
    return responseJson;
  }


  componentWillUnmount(){
    this._isMounted = false;
  }

   miseAjourPosition = () => {
      this.getGeo()
        .then((data) => {
            if(data && this._isMounted){
              this.setState({
                cordLongitude: parseFloat(data.lon.$numberDecimal),
                cordLatitude: parseFloat(data.lat.$numberDecimal)
              })
              console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        });
    
      //let position =  this.state.position;
      //console.log(position);
      
      /*
      if(position.lon){

        this.state.cordLongitude = parseFloat(position.lon.$numberDecimal);
        this.state.cordLatitude = parseFloat(position.lat.$numberDecimal);
      }
      */
    }

  mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "-6.270565,106.759550");
       });
     }

   }

  async getDirections(startLoc, destinationLoc) {
         try {
             let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
             let respJson = await resp.json();
             let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })
             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords
         } catch(error) {
           console.log('Error commit')
             this.setState({x: "error"})
             return error
         }
     }

  afficherPosition = (x) => {
    console.log(x);
    this.setState({location:x});
  }
     
  render() {

    let text = '';
    if (!this.state.latitude) {
      text = <ActivityIndicator size="large" color="#00ff00" />;
    } 
    else if (this.state.latitude) {
      text = (
      <MapView style={styles.map} 
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta
        }}
        onRegionChange={this.afficherPosition}
        showsUserLocation={true}
        showsMyLocationButton={true}       
      >

        {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Votre Location"}
       />}

       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
          coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
          title={"Votre Cible"}
        />}

       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        }

        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"/>
         }
      </MapView>);
    }

    return (
      <View style={{flex:1, justifyContent: 'center'}}>
        {text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Geo;