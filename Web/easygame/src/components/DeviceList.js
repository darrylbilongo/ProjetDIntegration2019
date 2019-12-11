import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const DeviceItem = ({device, remove}) => {
  return (
    <div className="container-sm" key={device.nomDevice} data-key={device.nomDevice}>
                <div className="row">
                  <div className="col-sm">
                    <h4>{device.nomDevice}</h4>
                  </div>
                </div>
              </div>
  );
}

class DeviceList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          email : "",
          fonction: ""
        }
    }

    componentDidMount(){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);

      this.setState({
          email: decoded.email,
          fonction: decoded.fonction
      })
    }

    /*onDelete = (e) => {

      console.log(e.currentTarget.parentNode);

      let a = e.currentTarget.parentNode.getAttribute("data-key");

      const id = this.state.devices.filter(device => {
        if(device.nomDevice = a){
          return true;
        }
      }) 

      console.log(id);

      axios.delete('http://localhost:5000/api/devices/')
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => {
          console.log(err)
      })

    }*/

    checkAdmin = (device) => {
      if(this.state.fonction === 'animateur'){
          return (<button name={device.nomDevice} className="btn btn-danger" style={{ float: 'right' }} onClick={this.onDelete}>
                    Supprimer
                  </button>)
      } 
    }


    render() { 
        return ( 
          <div className="container">
            {this.props.devices.map((device => (
              <DeviceItem device={device} key={device.nomDevice} remove={this.props.remove}></DeviceItem>
            )))}
          </div>
        );
    }
}
 
export default DeviceList;

