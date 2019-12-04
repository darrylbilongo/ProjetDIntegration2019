import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DeviceListItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nomDevice : '',
            device: {}
        }

    }
    render() { 
        const dev = this.props.device;
        return ( 
            <div>
                <p>{this.state.device.nomDevice}</p>
                <p>{this.state.device.propretaire}</p>
            </div> 
        );
    }
}


export default DeviceListItem;