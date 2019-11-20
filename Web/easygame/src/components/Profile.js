import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import { decode } from 'punycode';
import avatar from '../Logo/avatar-1577909_960_720.webp'
import { AUTH_LOGOUT } from 'ra-core';
class Profile extends Component {

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
            fonction : decoded.fonction
        })

    }

    render () {
            return (
                 
                <div className="container">
                    <div class="row">
                        <div className="jumbotron col-md-6">
                            <img src={avatar} alt="" height="40%"></img>
                        </div>
                    <div className="jumbotron">
                        <div className="col-md">
                            <h1>Profile</h1>
                        </div>
                        <table className="table col-sm-2 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Nom</td>
                                    <td>{this.state.nom}</td>
                                </tr>
                                <tr>
                                    <td>Prénom</td>
                                    <td>{this.state.prenom}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                                <tr>
                                    <td>Fonction</td>
                                    <td>{this.state.fonction}</td>
                                </tr>
                                <tr>
                                    <td>Totem</td>
                                    <td>{this.state.totem}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
                    
                   
                </div>
            );
    }

}

export default Profile;