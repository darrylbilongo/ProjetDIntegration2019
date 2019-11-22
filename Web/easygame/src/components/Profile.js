import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

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
            );
    }

}

export default Profile;