import React, {Component} from 'react';
import CreateDevice from './CreateDevice';
import DeviceList from './DeviceList';


class Tracking extends Component {
    render(){
        return(
            <div>
                <h3>Ajouter un nouveau device</h3>
                <CreateDevice/>
                <DeviceList/>
            </div>
        );
    }
}

export default Tracking;
