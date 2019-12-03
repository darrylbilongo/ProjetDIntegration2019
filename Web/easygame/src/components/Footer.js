import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <div>
                <footer className="main-footer">
                    <strong>Copyright © 2019 <a href="/">Easy Game - Groupe 7</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 0.1.0
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;