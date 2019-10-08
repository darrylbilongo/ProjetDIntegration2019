import React from 'react';
import { StyleSheet, Text, View , TextInput, Dimensions} from 'react-native';
import Animated from "react-native-reanimated";const {Value, event, clockRunning, timing, debug, stopClock, startClock, Clock, block, cond, eq, Extrapolate, interpolate, set} = Animated;


export default class Login extends React.Component {

    constructor(){
        this.textZindex = interpolate(this.but)
    }

  render() {
    return (<View style={styles.container}>
                <Animated.View >
                <TextInput placeholder="nom d'utilisateur"
                    style={styles.input}
                    placeholderTextColor="black"
                    underlineColorAndroid="transparent"
                />
                <TextInput placeholder="mot de passe"
                    style={styles.input}
                    placeholderTextColor="black"
                    underlineColorAndroid="transparent"
                />
                </Animated.View>
                <Animated.View>
                    <Text>Connexion</Text>
                </Animated.View>
            </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    zIndex: this.textZindex,  
    opacity: this.textOpacity,
    transform: [{translateY: this.textY}],
    justifyContent: 'center',
    height:  Dimensions.get('window').height,
    ...StyleSheet.absoluteFill,
    top:null,
  },
  input:{
      height:50,      
      marginHorizontal: 20,
      borderRadius: 20,
      marginVertical: 10,
      padding: 10
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10
  },
});