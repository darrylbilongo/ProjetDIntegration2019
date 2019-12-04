import React, {Component} from 'react';
import CreateDevice from './CreateDevice';
import DeviceList from './DeviceList';


class Tracking extends Component {
    render(){
        return(
            <div className="container-fluid">
                <h1> Tracking </h1>
                <span>Ajouter un nouveau device</span>
                <CreateDevice/>
                <DeviceList/>
            </div>
        );
    }
}

export default Tracking;
