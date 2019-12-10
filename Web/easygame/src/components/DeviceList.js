import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import DeviceListItem from './DeviceListItem';
import { decode } from 'punycode';


class DeviceList extends Component {

    constructor() {

        super();
      
        this.state = {
          devices : [],
          email : ""
        }

        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount(){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);

      console.log(decoded.email)
      
      this.setState({
          email: decoded.email,
      })

      this.getDevices();
    }

    getDevices = () => {
        axios.post('https://easygame.funndeh.com:5000/api/devices/getDevices', {
          proprietaire : this.state.email
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

    onDelete = (e) => {

      console.log(e.currentTarget.parentNode);

      let a = e.currentTarget.parentNode.getAttribute("data-key");

      const id = this.state.devices.filter(device => {
        if(device.nomDevice = a){
          return true;
        }
      }) 

      axios.delete('https://easygame.funndeh.com:5000/api/devices/' + id[0]._id)
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => {
          console.log(err)
      })

      
    }


    render() { 
        return ( 
          <div>
            <button onClick={this.getDevices}>
              Rafraichir devices
            </button>
            {this.state.devices.map((device => (
              <div className="container" key={device.nomDevice} data-key={device.nomDevice}>
                <p>
                  {device.nomDevice}
                  <select>
                    <option defaultValue value="groupe1">Groupe 1</option>
                    <option value="groupe2">Groupe 2</option>
                    <option value="groupe3">Groupe 3</option>
                    <option value="groupe4">Groupe 4</option>
                  </select>  
                </p>
                <button name={device.nomDevice} className="btn btn-danger" style={{ float: 'right' }} onClick={this.onDelete}>
                    Supprimer
                  </button>
              </div>
            )))}
          </div>
        );
    }
}
 
export default DeviceList;

