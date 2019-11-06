import React, { Component } from "react";

import {login} from './UserFonctions';

class Login extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            motDePasse: "",
            errors: {}
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
            email: this.state.email,
            motDePasse: this.state.motDePasse
        }

        console.log(user);

        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
    }

    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mn-3">Connectez vous s'il vous plait!</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Entrez votre email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de Passe: </label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Entrez votre mot de passe"
                                    value={this.state.motDePasse}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-primary">
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Login;