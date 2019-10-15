import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {

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
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">EasyGame</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/admin">Administration <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Tracking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jeux</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Profil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    {/* <Component2 /> 
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    */}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;