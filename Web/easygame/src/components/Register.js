import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { register } from './UserFonctions';


class Login extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nom: "",
            prenom: "",
            dateNaissance: "",
            fonction: "",
            totem: "",
            email: "",
            motDePasse: "",
            responseAPI: ""
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.userEmail,
            motDePasse: this.state.userPassword,
            nom: this.state.nom,
            prenom: this.state.prenom,
            totem: this.state.totem,
            dateNaissance: this.state.dateNaissance,
            fonction: this.state.fonction
        }

        console.log(user);

        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            userEmail: ''
        })
    }

    
    render() {
        return (
            <RegisterComponent className="container-fluid">
                <div className="row">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mn-3">Veuillez vous enregistrer..</h1>
                        <div className="form-group">
                            <label htmlFor="last_name">Nom: </label>
                            <input type="text"
                                name="nom"
                                className="form-control"
                                placeholder="Entrez votre nom"
                                value={this.state.nom}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="first_name">Prénom: </label>
                            <input type="text"
                                name="prenom"
                                className="form-control"
                                placeholder="Entrez votre prénom"
                                value={this.state.prenom}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email"
                                className="form-control"
                                placeholder="Entrez votre email"
                                value={this.state.userEmail}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe: </label>
                            <input type="password"
                                className="form-control"
                                placeholder="Entrez votre mot de passe"
                                value={this.state.userPassword}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit"
                        className="btn btn-block btn-lg btn-primary">
                            Envoyer
                        </button>
                    </form>
                </div>    
            </RegisterComponent>
        );
    }
}
const RegisterComponent = styled.div``
export default Login;