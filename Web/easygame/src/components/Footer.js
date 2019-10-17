import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <div>
                <footer class="app-footer">
                    <div>
                    <a>EasyGame</a>
                    <span>&copy; EasyGame</span>
                    </div>
                    <div class="ml-auto">
                        <span>Powered by </span>
                        <a href="/team">Easy Game</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;