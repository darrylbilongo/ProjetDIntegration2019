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
                <select>
                  <option selected value="groupe1">Groupe 1</option>
                  <option value="groupe2">Groupe 2</option>
                  <option value="groupe3">Groupe 3</option>
                  <option value="groupe4">Groupe 4</option>
                </select>
                <button style={{ float: 'right' }}>
                  Supprimer
                </button>
              </p>
            </div>
        );
    }
}



export default DeviceListItem;