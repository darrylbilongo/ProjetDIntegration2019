import React from 'react';
import '../App.css';
import NavBar from './NavBar';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
          }
    }

    render() {
        return (
          <div>
            <div>
              <form className='demoForm'>
                <h2>Connectez Vous !</h2>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control"
                    name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" className="form-control"
                    name="password" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Se connecter
                </button>
              </form>
            </div>
          </div>
          
    );
    }
}

export default Login;