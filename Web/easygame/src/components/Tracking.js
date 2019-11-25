import React, {Component} from 'react';
import CreateDevice from './CreateDevice';

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
                    <h3>Ajouter un nouveau device</h3>
                    <CreateDevice/>
                </div>
                
                    {/*<ul>
                        {list.map(item => (
                            <li key={item.id}>
                                <div>{item.id}</div>
                                <div>{item.key}</div>
                            </li>
                        ))}
                        </ul>*/}
            </div>
        );
    }
}

export default Tracking;
