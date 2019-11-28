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
                            Se connecter
                        </Link>
            </li>
        )

         const regLink = (
            <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            S'enregistrer
                        </Link>
                    </li>
        ) 
        const homeLink = (
            <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                </li>
        )
        const calendarLink = (
            <li className="nav-item">
                <Link to="/calendar" className="nav-link">
                    Calendrier
                </Link>
             </li>
        )

        const profileLink = (
            <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profil
                    </Link>
            </li>
        )
        const logoutLink = (
            <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                       Deconnexion
                    </a>
            </li>
        )

        const listingLink = (
            <li className="nav-item">
                    <Link to="/listing" className="nav-link">
                        Listing
                    </Link>
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

                        {localStorage.usertoken ? homeLink : loginLink}
                        {localStorage.usertoken ?  calendarLink: regLink}
                        {localStorage.usertoken ? profileLink :null}
                        {localStorage.usertoken ? listingLink :null}
                        {localStorage.usertoken ? logoutLink :null}
                        {
                            /*<li className="nav-item">
                            <a className="nav-link" href="/admin">Administration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/error">Tracking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calendar">Calendrier</a>
                        </li>*/}
                    </ul>
                    
                </div>
            </nav>
        );
    }
}
export default withRouter(NavBar);