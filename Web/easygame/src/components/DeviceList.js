import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import DeviceListItem from './DeviceListItem';


class DeviceList extends Component {
    
    state = {
      devices : [],
      email : ""
    }

    componentDidMount(){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);

      this.setState({
          email: decoded.email,
      })

      this.getDevices();
    }

    getDevices = () => {
        axios.post('http://easygame.funndeh.com:5000/api/devices/getDevices', {
          proprietaire : "darrylbilongo@gmail.com"
        })
        .then(
          res => {
            console.log(res);
            this.setState({
              devices : res.data
            })
            console.log(this.state.devices)
          }
        )
        .catch(err => {
            console.log(err)
        })
    }


    render() { 
        return ( 
          this.state.devices.map((device => (
            <div className="container">
              <p>
                {device.nomDevice}
                <select>
                  <option selected value="groupe1">Groupe 1</option>
                  <option value="groupe2">Groupe 2</option>
                  <option value="groupe3">Groupe 3</option>
                  <option value="groupe4">Groupe 4</option>
                </select>
                <button className="btn btn-danger" style={{ float: 'right' }}>
                  Supprimer
                </button>
              </p>
            </div>
          )))
        );
    }
}
 
export default DeviceList;

