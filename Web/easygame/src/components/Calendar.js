import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jwt_decode from 'jwt-decode';
import {ajoutEvent, getEvents } from './UserFonctions';


class Calendar extends Component {

    constructor(){
        super()
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            dateNaissance:"",
            totem:"",
            fonction:"",
            events: [],
            nouveau:"",
            newDate:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            nom: decoded.nom,
            prenom: decoded.prenom,
            email: decoded.email,
        })

        const e = getEvents(this.state.email);
        
        this.setState({
            events: []
        })
        
    }

    onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }


    onSubmit(e) {
        e.preventDefault();

        const newEvent = {
            title: this.state.nouveau,
            date: this.state.newDate ,
            userEmail: this.state.email
        }

        ajoutEvent(newEvent);



    }

    render () {
            return (
                <div>
                    <div className="container">
                        <h1>Bonjour {this.state.prenom}</h1>
                    </div>
                    <FullCalendar 
                        timeZone= 'UTC'
                        defaultView="dayGridMonth" 
                        plugins={[ dayGridPlugin ]}
                        events={this.state.events}
                        onTypeChange={this.onTypeChange} 
                        />   
                    <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="text"> Ajoutez des nouveaux évenements: </label>
                                <input type="text"
                                    name="nouveau"
                                    className="form-control"
                                    placeholder=". . ."
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="date" min="1000-01-01"
                                    max="3000-12-31" 
                                    name="newDate"
                                    className="form-control"
                                    onChange={this.onChange}
                                >
                                </input>
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-primary">
                                Envoyer
                            </button>
            </form>
                </div>   
            );
    }

}



export default Calendar;