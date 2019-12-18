import React from 'react';

const DeviceItem = ({device, remove, fonction}) => {

  let check = () => {
    if (fonction == 'animateur') {
      return <button className="btn btn-danger" style={{ float: 'right' }} onClick={() => {remove(device._id)}}>
                Supprimer 
              </button> 
    }
  }

  return (
      <div className="row" key={device.nomDevice}>
        <div className="col-sm">
          <h4>{device.nomDevice}</h4>
        </div>
        {check()}  
      </div>   
  );
}

const DeviceList = ({devices, remove, fonction}) => {
    return ( 
      <div className="container-sm">
        {devices.map((device => (
          <DeviceItem device={device} key={device._id} remove={remove} fonction={fonction}></DeviceItem>
        )))}
      </div>
    );
}
 
export default DeviceList;

