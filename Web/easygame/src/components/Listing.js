import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridToolbar, GridColumn as Column } from '@progress/kendo-react-grid';
import person from './json/person.json';


class Listing extends React.Component {
    render() {
        return (   
            <Grid
                style={{ height: '400px' }}
                data={[ ...person ]}
            >
                <Column field="Name" title="Name" width="100%" class=" col"/>
                <Column field="Totem" title="Totem" width="100%" />
                <Column field="Role" title="Fonction" width="100%" />
                <Column width="100%"
                    field="Présent"
                    cell={props => (
                        <td>
                            <input  type="checkbox" checked={props.dataItem[props.field]} />
                        </td>
                    )}
                />
            </Grid>
        );
    }
}


export default Listing;