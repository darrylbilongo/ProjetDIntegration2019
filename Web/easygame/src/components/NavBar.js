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
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                <div className="collapse navbar-collapse justify-content"  id="navbarNav">
                    <ul>
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/register" className="nav-link">
                            Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
        )

        const userLink = (
            <ul>
                <li className="nav-item active">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item active">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                       Log Out
                    </a>
                </li>
            </ul>
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
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin">Administration</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/error">Tracking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Jeux</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/team">Team</a>
                    </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }
}
export default withRouter(NavBar);