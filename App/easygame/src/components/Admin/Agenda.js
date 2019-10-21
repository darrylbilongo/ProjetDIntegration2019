import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView,} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CalendarList, Calendar, Agenda} from 'react-native-calendars';
import NavigationService from '../Navigation/NavigationService';
//import dateOccupee from './DateOccupee';

const { width, height } = Dimensions.get('window');


export default class Planning extends Component {


  dateOccupee = new Date();
  
  render() {
    return (
        <View style={{...styles.container}}>
          <CalendarList
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            pastScrollRange={50}
            futureScrollRange={50}
            scrollEnabled={true}
            showScrollIndicator={true}
            //maxDate={new Date()}
            onDayPress={day => {
                //console.log('la journée sectionnée est:', day);
                dateOccupee = {
                  day: day,
                  marked: false,
                  config: {}
                };
                NavigationService.navigate('Project');
            }}
            style={{flex:1}}
          />
        </View>  
    )
  }
  
}  