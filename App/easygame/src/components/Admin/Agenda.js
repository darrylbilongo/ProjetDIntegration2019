import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import {Agenda} from 'react-native-calendars';
import NavigationService from '../Navigation/NavigationService';

const { width, height } = Dimensions.get('window');


export default class Planning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      dates: [],
      color: {}
    };

    this.dates = [];
    this.tmp = [];
    this.colors = ['#666', 'blue', 'gray', 'pink', 'yellow', 'green']
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        minDate={'2012-05-10'}
        markedDates={this.state.color}theme={{
          backgroundColor: '#203546',
          calendarBackground: '#203546',
          textSectionTitleColor: '#ffffff',
          selectedDayBackgroundColor: '#203546',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#ffffff',
          textDisabledColor: '#ffffff',
          dotColor: '#ffffff',
          selectedDotColor: '#ffffff',
          monthTextColor: '#ffffff',
          textMonthFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 15,
          agendaDayTextColor: 'white',
          agendaDayNumColor: 'white',
          agendaTodayColor: '#00adf5',
          agendaKnobColor: 'white'
          }}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {      
      for(let i = -20; i < 100; i++){
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          let pourUnJour = [];
          if(global.utilisateur.agenda){
            global.utilisateur.agenda.forEach(x => {
              if(x.date.split('T')[0] == strTime){
                pourUnJour.push(x);
                this.dates.push(x.date.split('T')[0]);
              }
            });
            for (let j = 0; j < pourUnJour.length; j++) {
              this.state.items[strTime].push({
                name:  pourUnJour[j].title,
                height: Math.max(50, Math.floor(Math.random() * 150))
              });
            }
          }
        }
      }
      this.dates.forEach(x => {
        this.tmp.push( {"color" : this.colors[Math.floor(Math.random() * 5)]});
      });

      console.log("this.dates ", this.dates);

      if(typeof this.dates !== 'undefined' && this.dates.length > 0){
        this.setState({
          color: Object.assign(...this.dates.map((k, i) => ({[k]: this.tmp[i]})))
        })
  
  
        const newItems = {};
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
        this.setState({
          items: newItems
        });
      }
      else{
        Alert.alert("Il n'y rien de prévus pour vous.");
        NavigationService.navigate('Accueil');
      }

    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Rien à faire en ce jour!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});  