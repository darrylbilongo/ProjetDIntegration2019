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
        return ( 
            <div>
              <p>
                <button style={{ float: 'right' }}>
                  Supprimer
                </button>
              </p>
            </div>
        );
    }
}



export default DeviceListItem;