import React, { Component } from 'react'

export default class CreateDevice extends Component {

    state = {
        id : '',
        key: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const id = this.refs.id;
        const key = this.refs.key

        const task = {
            id: id.value,
            key: key.value
        }

        this.createDevice(task);
        
        this.setState({
            id: "",
            key: ""
        })
    }

    onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    createDevice(dev) {
        return dev;
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this) }>
                <div className="form-group">
                    <div className="col-md-10">
                        <input 
                        className="form-control" 
                        type="text"
                        name="id" 
                        placeholder="Id du device"
                        onChange={this.onChange} />
                        <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Entrez la clé"
                        onChange={this.onChange} />
                    </div>
                    <div className="col-md-2 text-right">
                        <button type="submit" className="btn btn-default">Ajouter</button>
                    </div>
                </div>
            </form>
        )
    }

    
}
