import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Bienvenue from './Bienvenue';
import Animated, {Easing} from "react-native-reanimated";
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const {Value, event, clockRunning, timing, debug, stopClock, startClock, Clock, block, cond, eq, Extrapolate, interpolate, set} = Animated;

export default class Accueil extends Component {

  constructor(){
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({state})=>block([
          cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)))
        ])
      }
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [- height / 2, 0],
      extrapolate: Extrapolate.CLAMP
    });
  }

  render() {
    return (
    <View style={styles.container}>
        <Animated.View style={{...StyleSheet.absoluteFill, transform: [{translateY: this.bgY}]}}>
            <Image
                source={require("../images/feuille.jpg")}
                style={{flex: 1, height: null, width: null}}
            />
        </Animated.View>

        <View style={{ height: height / 2, justifyContent: 'center' , marginVertical:30 }}>
        <Bienvenue />
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.button, 
                                  opacity: this.buttonOpacity,
                                  transform: [{translateY: this.buttonY}]}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Connexion</Text>
            </Animated.View>
          </TapGestureHandler>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{ ...styles.button, 
                                    backgroundColor: '#3700B3',
                                    opacity: this.buttonOpacity,
                                    transform: [{translateY: this.buttonY}]
                                  }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  Créer un compte
              </Text>
            </Animated.View>
          </TapGestureHandler>
        </View>
    </View>
    );
  }
}

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
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