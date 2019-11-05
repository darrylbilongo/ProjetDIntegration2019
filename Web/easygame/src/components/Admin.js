import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";

import { UserList } from './userslist';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

class Administration extends React.Component {


  render() {
    return (
      <div>
        <Admin dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
          <Resource name="parents" list={ListGuesser} />
          <Resource name="animateurs" list={ListGuesser} />
        </Admin>
      </div>
      
      //<Scheduler />
    );
  }
}

export default Administration;