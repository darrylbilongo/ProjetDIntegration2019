import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jwt_decode from 'jwt-decode';
import {ajoutEvent, getEvents } from './UserFonctions';
import axios from 'axios';


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

        this.refresh();
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
        
        this.refresh();
    }

    refresh = async () => {
        let newEvents = await getEvents(this.state.email).then(res => {
            return res;
        });

        if(newEvents){
            this.setState({
                events: newEvents.map(event => {
                    return {
                        title: event.title,
                        date: event.date
                    }
                })
            })

            console.log(this.state.events)
        }
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
                        header = {{
                            left: 'prev,next today myCustomButton',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        }}
                        plugins={[ dayGridPlugin ]}
                        events={this.state.events}
                        onTypeChange={this.onTypeChange}
                        navLinks= {true} // can click day/week names to navigate views
                        editable= {true}
                        eventClick = {function(calEvent) {
                            alert(calEvent.title);
                            console.log(calEvent)
                        }}
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
            <button 
                className="btn btn-block btn-lg btn-primary" onClick={this.refresh}>
                    Rafraichir
                </button>
                </div>   
            );
    }

}



export default Calendar;