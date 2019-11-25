import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jwt_decode from 'jwt-decode';
import {ajoutEvent } from './UserFonctions';
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
            fonction:"",
            events: [],
            nouveau:"",
            newDate:""
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
            events: [],
        })
    }

    onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    onChangeDate(e) {
        this.setState({
            dateNaissance: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const testEvent = {
            event_id: '1',
            title: this.state.nouveau,
            date: this.state.newDate  
        }

        ajoutEvent(this.state.nouveau, this.state.newDate)
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
                        events={this.state.events}
                        onTypeChange={this.onTypeChange} 
                        />   
                    {/*<form noValidate onSubmit={this.onSubmit}>
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
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" 
                                    name="newDate"
                                    className="form-control"
                                    onChange={this.onChangeDate}
                                >
                                </input>
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-primary">
                                Envoyer
                            </button>
            </form>*/}
                </div>   
            );
    }

}



export default Calendar;