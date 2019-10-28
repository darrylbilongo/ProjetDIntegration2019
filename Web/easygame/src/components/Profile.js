import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import { decode } from 'punycode';

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            nom: "",
            prenom: "",
            email: ""
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            nom: decoded.nom,
            prenom: decode.prenom,
            email: decoded.email
        })

    }

    render () {
            return (
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="col-sm-8">
                            <h1>Profile</h1>
                        </div>
                        <table className="table col-md-6 mx-auto">
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
                            </tbody>

                        </table>
                    </div>
                </div>
            );
    }

}

export default Profile;