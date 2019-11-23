import React, {Component} from 'react';

const list = [
    {
      id: 'a',
      key: 'nuedeiozc'
    },
    {
      id: 'b',
      key: 'jfizncoinczr'
    },
  ];

class Tracking extends Component {
    render(){
        return(
            <div>
                <div>
                    Ajouter un nouveau device :

                    <ul>
                        {list.map(item => (
                        <li key={item.id}>
                            <div>{item.id}</div>
                            <div>{item.firstname}</div>
                            <div>{item.lastname}</div>
                            <div>{item.year}</div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tracking;
