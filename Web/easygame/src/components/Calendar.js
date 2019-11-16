import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


class Calendar extends Component {
    render () {
            return (   
                <FullCalendar 
                defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
                events={[
                    { title: 'Repas', date: '2019-11-01' },
                    { title: 'Activité 1', date: '2019-11-05' }
                ]} 
                />   
            );
    }

}



export default Calendar;