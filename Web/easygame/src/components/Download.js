import React, { Component } from 'react';

export class Download extends Component {
    render() {
        return (
            <div className="container">
                <h1>Téléchargez l'application</h1>
                <button className="btn btn-danger">
                    <a href='/files/easygameApp.apk' download>Click to download</a>
                </button>
            </div>
        );
    }
}

export default Download;
