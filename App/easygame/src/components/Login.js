import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Alert,} from 'react-native';
import Bienvenue from './Bienvenue';
import Animated, {Easing} from "react-native-reanimated";
import {TapGestureHandler, State, TouchableOpacity} from 'react-native-gesture-handler';
import Svg, {Image, Circle, ClipPath} from 'react-native-svg';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const {Value ,concat, event, clockRunning, timing, debug, stopClock, startClock, Clock, block, cond, eq, Extrapolate, interpolate, set} = Animated;

export default class Login extends Component {
  constructor(props){
    super(props);

    const myValue = new Value(-1);

    this.state = {
      email: "",
      password: "",
    }

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({state})=>block([
          cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)))
        ])
      }
    ]);

    this.onCloseState = event([
      {
        nativeEvent: ({state})=>block([
          cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 0, 1)))
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
      outputRange: [- height/2 -50, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 300],
      extrapolate: Extrapolate.CLAMP
    });
    
    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });
  }

  myValidate = () =>{
    const {email, password} = this.state;
    this.preventDefault = false;
    if(email == "" && password == ""){
      Alert.alert("Veuillez remplir votre mail et votre mot de passe");
    }
    else if(email == "manou" && password == "manou"){
      this.onStateChange;
    }
    else if(email != "" && password == ""){
      Alert.alert("Pas de mot de passe!")
    }
    else if(email == "" && password != ""){
      Alert.alert("Pas d'email!")
    }
    else{
      Alert.alert("Email ou mot de passe érroné!")
    }
  }

  inputFocused (refName) {
    setTimeout(() => {
      let scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        React.findNodeHandle(this.refs[refName]),
        110,
        true
      );
    }, 50);
  }

  render() {
    
    return (
    <View style={myContainer.container}>
        <Animated.View style={{...StyleSheet.absoluteFill, transform: [{translateY: this.bgY}]}}>
            <Svg height={height+50} width={width}>
              <ClipPath id='clip'>
                <Circle r={height+50} cx={width / 2} />
              </ClipPath>
            <Image
                href={require("../images/feuille.jpg")}
                width={width}
                height={height+50}
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#clip)"
            />
            </Svg>
        </Animated.View>

        <View style={{ height: height / 2, justifyContent: 'center' , marginVertical:30 }}>
        <Bienvenue />
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.button, 
                                  backgroundColor: 'white',
                                  opacity: this.buttonOpacity,
                                  transform: [{translateY: this.buttonY}]}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Se connecter</Text>
            </Animated.View>
          </TapGestureHandler>
          <TapGestureHandler>
            <Animated.View style={{ ...styles.button, 
                                    backgroundColor: '#003d00',
                                    opacity: this.buttonOpacity,
                                    transform: [{translateY: this.buttonY}]
                                  }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  Créer un compte
              </Text>
            </Animated.View>
          </TapGestureHandler>

          <Animated.View style={{height:height/2, 
                                  ...StyleSheet.absoluteFill, 
                                  top:null, 
                                  justifyContent:'center',
                                  zIndex: this.textInputZindex,
                                  opacity: this.textInputOpacity,
                                  transform:[{translateY: this.textInputY}],
                                  
                                }}>
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text style={{fontSize: 15,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        transform: [{rotate: concat(this.rotateCross, 'deg')}]}}>
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
            <TextInput 
                placeholder="email"
                style={styles.textInput}
                placeholderTextColor="black"
                keyboardType={'email-address'}
                onChangeText={email => this.setState({email})}
                autoCapitalize='none'
                returnKeyType='next'
              />
              <TextInput 
                placeholder="mot de passe"
                style={styles.textInput}
                secureTextEntry={true}
                placeholderTextColor="black"
                autoCapitalize='none'
                onChangeText={password => this.setState({password})}
                keyboardType={'default'}
              />
              <TapGestureHandler>
                <TouchableOpacity style={{...styles.button, backgroundColor: '#003d00', color:'white'}}
                  onPress={this.myValidate}
                >
                  <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}} >
                    Connexion
                  </Text>
                </TouchableOpacity>
              </TapGestureHandler>
          </Animated.View>
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

const myContainer = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height:height,
        width: width,
      }
});