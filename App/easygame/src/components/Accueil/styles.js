import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:height,
        width: width,
      },
      imgprofile: {
        marginLeft: 100,
        marginTop: 40,
        height: 100,
        width: 100
      },
      button: {
        height: 50,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 2, height: 2},

      },
      textInput: {
        height:50,
        borderRadius: 20,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor:'rgba(0,0,0, 0.5)',
        fontStyle: 'italic'
      },
      closeButton:{
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 5,
        left: width / 2 -20,
      },
      name:{
          color: "#003d00",
          fontSize: 22,
          marginLeft: 100,
          marginTop: 12,
      },
      username: {
          color: "#626FB4",
          fontSize: 16,
          marginLeft: 110,
          marginTop: 4,
      },
      itemProfile:{
        marginTop: 20,
      },
      mainBody:{
        /*flex: 1,
        height: height,
        width: width,*/
        marginLeft: 24,
        marginTop: 30,
        marginBottom: 70,
        marginRight: 24,
      },
      labelItem:{
        marginTop: -45,
        marginLeft: 60,
        fontSize: 18,
        color: "#003d00"
      },
      subLabelItem:{
        marginTop: 4,
        marginLeft: 60,
        fontSize: 16,
        color: "#1faa00"
      },
      imgItem: {
        marginLeft: 15,
        marginTop: 30,
      },
      deconnexion: {
        height: 50,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 2, height: 2},
      }
    });   
    
    export default styles;