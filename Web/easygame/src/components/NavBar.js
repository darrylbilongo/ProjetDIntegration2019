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

        const loginLink = (
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
        )
         
        const regLink = (
            <li className="nav-item">
            <Link to="/register" className="nav-link">
            Register
            </Link>
            </li>
            )
        
        const userLink = (
            <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
            </li>
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
                <button className="navbar-toggler" type="button"  
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav"
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content"  id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Tracking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Jeux</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/team">Team</a>
                    </li>
                    {localStorage.usertoken ? userLink : loginLink}
                    {localStorage.usertoken ? logoutLink : regLink}
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default withRouter(NavBar);