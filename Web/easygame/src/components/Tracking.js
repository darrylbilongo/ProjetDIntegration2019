import React, {Component} from 'react';
import CreateDevice from './CreateDevice';
import DeviceList from './DeviceList';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

class Tracking extends Component {

    constructor(){
        super()
        this.state = {
            email: "",
            fonction:"",
            devices: []
        }
        this.onChange = this.onChange.bind(this);
    }


    async componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            email: decoded.email,
            fonction: decoded.fonction
        })

        await this.getDevices();
    }

    remove(id) {
        const reste = this.state.devices.filter((device) => {
            if(device.nomDevice !== id) return device;
        });

        
        /*this.setState(prevState => ({
            devices: prevState.devices.filter(el => el != id )
        }))*/

        axios.delete('https://easygame.funndeh.com/api/devices/' + id)
            .then(res => {
                console.log(res.data.message);
                this.setState({
                    devices : reste
                });
            })
            .catch(err => {
                console.log(err)
            })

        this.getDevices();
    }

    addDevice = async (dev) => {
        await axios.post('https://easygame.funndeh.com/api/devices/add', {
            nomDevice: dev.nomDevice,
            proprietaire: this.state.email
        })
        .then(
            res => {
                this.setState({
                    devices: [...this.state.devices, res.data]
                })
                this.getDevices();
            }
        )
        .catch(err => {
            console.log(err)
        })
    }

    getDevices = async () => {
        await axios.post('https://easygame.funndeh.com/api/devices/getDevices', {
          proprietaire : this.state.email
        })
        .then(
          res => {
            this.setState({
              devices : res.data
            })
          }
        )
        .catch(err => {
            console.log(err)
        })
    }

    onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const device = {
            nomDevice: this.state.nomDevice,
            proprietaire: this.state.proprietaire
        }

        this.addDevice(device);

        this.setState({
            devices: [ device, ...this.state.devices ],
            nom: ''
        })
    }


    checkAdmin = () => {
        if(this.state.fonction == 'animateur'){
            return (
                <div>
                    <span>Ajouter un nouveau device</span>
                    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this) }>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <input 
                                className="form-control" 
                                type="text"
                                name="nomDevice" 
                                placeholder="nom du device"
                                onChange={this.onChange} />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-info">Ajouter</button>
                            </div>
                        </div>
                    </form>    
                </div>
            )
        } 
    }

    render(){
        return(
            <div className="container-fluid">
                <h1> Tracking </h1> 
                <button onClick={this.getDevices}>Charger les devices</button>  
                {this.checkAdmin()}
                <DeviceList devices={this.state.devices} remove={this.remove.bind(this)} fonction={this.state.fonction}/>
            </div>
        );
    }
    
}

export default Tracking;
