import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class CreateDevice extends Component {

    constructor(){
        super()
        this.state = {
            nom: "",
            prenom: "",
            idAnimateur: "",
            email: "",
            dateNaissance:"",
            totem:"",
            fonction:"",
            nomDevice : '',
            devices: []
        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            nom: decoded.nom,
            idAnimateur: decoded.idAnimateur,
            prenom: decoded.prenom,
            email: decoded.email,
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const device = {
            nomDevice: this.state.nomDevice,
            proprietaire: this.state.email
        }
        this.addDevice(device);
        
        this.setState({
            nom: ""
        })
    }

    onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    addDevice = (dev) => {
        axios.post('http://easygame.funndeh.com:5000/api/devices/add', {
            nomDevice: dev.nomDevice,
            proprietaire: dev.proprietaire
        })
        .then(
            res => this.setState({
            devices: [...this.state.devices, res.data]
            })
        )
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this) }>
                <div className="form-group">
                    <div className="col-md-10">
                        <input 
                        className="form-control" 
                        type="text"
                        name="nomDevice" 
                        placeholder="nom du device"
                        onChange={this.onChange} />
                    </div>
                    <div className="col-md-10 text-right">
                        <button type="submit" className="btn btn-info">Ajouter</button>
                    </div>
                </div>
            </form>
        )
    }

    
}
