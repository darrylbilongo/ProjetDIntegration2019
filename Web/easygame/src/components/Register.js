import React, { Component } from "react";
import { register } from './UserFonctions';


class Register extends Component {
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
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    onChangeMail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            motDePasse: this.state.motDePasse,
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
    }

    
    render() {
        return (
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
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
                                    onChange={this.onChangeMail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe: </label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Entrez votre mot de passe"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label >Date de Naissance</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" 
                                    className="form-control"
                                >
                                </input>
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-primary">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>    
        );
    }
}

export default Register;