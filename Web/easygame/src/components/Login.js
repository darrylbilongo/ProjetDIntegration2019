import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userEmail: "",
            userPassword: "",
            responseAPI: ""
        }
    }

    onChangeUserEmail(e) {
        this.setState({
            userEmail: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            userEmail: this.state.userEmail,
        }

        console.log(user);

        this.setState({
            userEmail: ''
        })
    }

    
    render() {
        return (
            <div>
                <h3>Enregistrez vous !</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.userEmail}
                            onChange={this.onChangeUserEmail}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Soumettre" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;