import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';

import {login} from './UserFonctions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            userPassword: "",
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
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword
        }

        console.log(user);

        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
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
            <LoginComponent className="container-fluid">
                <div className="row">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mn-3">Connectez vous s'il vous plait!</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email"
                                required
                                className="form-control"
                                placeholder="Entrez votre email"
                                value={this.state.userEmail}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mot de Passe: </label>
                            <input type="password"
                                className="form-control"
                                placeholder="Entrez votre email"
                                value={this.state.userPassword}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit"
                        className="btn btn-block btn-lg btn-primary">
                            Se connecter
                        </button>
                    </form>
                </div>    
            </LoginComponent>
        );
    }
}
const LoginComponent = styled.div``

export default Login;