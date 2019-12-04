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
            <div>
              <p>{device.nomDevice} + {device.proprietaire}</p>
            </div>
          )))
        );
    }
}
 
export default DeviceList;

