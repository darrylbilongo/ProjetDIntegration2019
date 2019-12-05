import React, {Component} from 'react';
import CreateDevice from './CreateDevice';
import DeviceList from './DeviceList';
import jwt_decode from 'jwt-decode';

class Tracking extends Component {

    constructor(){
        super()
        this.state = {
            email: "",
            fonction:"",
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

    checkAdmin = () => {
        if(this.state.fonction == 'admin'){
            return <CreateDevice/>
        } 
    }

    render(){
        return(
            <div className="container-fluid">
                <h1> Tracking </h1>
                <span>Ajouter un nouveau device</span>
                {this.checkAdmin()}
                <DeviceList/>
            </div>
        );
    }
}

export default Tracking;
