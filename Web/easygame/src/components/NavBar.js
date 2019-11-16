import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class NavBar extends React.Component {

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
   
    render() { 

        const loginRegLink = (
            <div className="collapse navbar-collapse justify-content"  id="navbarNav">
                <ul>
                    <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Se connecter
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            S'enregistrer
                        </Link>
                    </li>
                </ul>
            </div>
            
        )
         
        /*const regLink = (
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
        )*/
        
        const userLink = (
            <ul>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profil
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                       Deconnexion
                    </a>
                </li>
            </ul>
        )
        const logoutLink = (
            <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                   Log Out
                </a>
            </li>
        )
       
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                <a className="navbar-brand" href="/">EasyGame</a>
                <button className="navbar-toggler" 
                    type="button"  
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav"
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content"  id="navbarNav">
                    <ul className="navbar-nav"> 
                        {/*<li className="nav-item">
                            <a className="nav-link" href="/admin">Administration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/error">Tracking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calendar">Calendrier</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Se connecter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">S'enregistrer</a>
                        </li>*/}
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }
}
export default withRouter(NavBar);