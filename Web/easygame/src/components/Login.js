import React, { Component } from "react";

import {login} from './UserFonctions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            motDePasse: '',
            errors: {}
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMDP = this.handleChangeMDP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleChangeMDP(e) {
        this.setState({
           motDePasse: e.target.value
        });
    }

    handleSubmit(e) {
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
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.handleSubmit}>
                            <h1 className="h3 mn-3">Connectez vous s'il vous plait!</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Entrez votre email"
                                    onChange={this.handleChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de Passe: </label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Entrez votre mot de passe"
                                    onChange={this.handleChangeMDP}
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-primary">
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>    
        );
    }
}

export default Login;