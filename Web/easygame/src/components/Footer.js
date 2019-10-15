import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <div>
                <footer class="app-footer">
                    <div>
                    <a href="https://coreui.io">EasyGame</a>
                    <span>&copy; 2018 creativeLabs.</span>
                    </div>
                    <div class="ml-auto">
                    <span>Powered by </span>
                    <a href="https://coreui.io">Easy Game</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;