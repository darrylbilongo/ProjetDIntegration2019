import React, { Component } from 'react';

export class Download extends Component {
    render() {
        return (
            <div className="container">
                <h1>Téléchargez l'application Easygame</h1>
                <button className="btn btn-secondary">
                    <a href='/files/easygameApp.apk' download>Click to download</a>
                </button>
            </div>
        );
    }
}

export default Download;
