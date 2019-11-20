import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jwt_decode from 'jwt-decode';
import { decode } from 'punycode';


class Calendar extends Component {

    constructor(){
        super()
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            dateNaissance:"",
            totem:"",
            fonction:""
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            nom: decoded.nom,
            prenom: decoded.prenom,
            email: decoded.email,
            dateNaissance : decoded.dateNaissance,
            totem : decoded.totem,
            fonction : decoded.fonction,
            events: decoded.events
        })

    }

    onTypeChange = (type) => {
        this.setState({
            type,
        });
    }

    render () {
            return (
                <div>
                    <div className="container">
                        <h2>Bonjour {this.state.prenom}</h2>
                    </div>
                    <FullCalendar 
                        defaultView="dayGridMonth" 
                        plugins={[ dayGridPlugin ]}
                        events={[
                            { title: 'Repas', date: '2019-11-01' },
                            { title: 'Activité 1', date: '2019-11-05' }
                        ]}
                        onTypeChange={this.onTypeChange} 
                        />   
                </div>   
            );
    }

}



export default Calendar;