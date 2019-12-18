import React, { Component } from 'react';

const DeviceItem = ({device, remove}) => {
  return (
      <div className="row">
        <div className="col-sm">
          <h4>{device.nomDevice}</h4>
        </div>
        <button className="btn btn-danger" style={{ float: 'right' }} onClick={remove(device.nomDevice)}>
          Supprimer
        </button>
      </div>   
  );
}

const DeviceList = ({devices, remove}) => {
    return ( 
      <div className="container-sm">
        {devices.map((device => (
          <DeviceItem device={device} key={device._id} remove={remove}></DeviceItem>
        )))}
      </div>
    );
}
 
export default DeviceList;

