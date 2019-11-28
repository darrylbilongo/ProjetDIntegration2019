import React from "react";
import { Admin, Resource} from "react-admin";
//import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";

import { UserList } from './userslist';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

//const dataProvider = jsonServerProvider("http://localhost:5000/users");

//const dataProvider = simpleRestProvider("http://localhost:5000/users");

class Administration extends React.Component {


  render() {
    return (
      <div>
        <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList} />
        </Admin>
      </div>
      
      //<Scheduler />
    );
  }
}

export default Administration; 

/*
import React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import defaultMessages from 'ra-language-english';

import createAdminStore from './createAdminStore';
//import messages from './i18n';

// your app components
/*import Dashboard from './Dashboard';
import { PostList, PostCreate, PostEdit, PostShow } from './Post';
import { CommentList, CommentEdit, CommentCreate } from './Comment';
import { UserList, UserEdit, UserCreate } from './User';

import { UserList } from './userslist';
import jsonServerProvider from "ra-data-json-server";
// side effects
//const authProvider = () => Promise.resolve();
//const dataProvider = restProvider('http://path.to.my.api/');
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

/*const i18nProvider = locale => {
    if (locale !== 'en') {
        return messages[locale];
    }
    return defaultMessages;
};*/

/*const history = createHashHistory();

class Administration extends React.Component {
  render () {
    return (
      <Provider
        store={createAdminStore({
                    dataProvider,
                    //i18nProvider,
                    history,
                })}
        >
        <Admin
                history={history}
                title="My Admin"
                dataProvider={dataProvider}
        >
                {/*<Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
                <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} />
              <Resource name="users" list={UserList} />
        </Admin>
      </Provider>
    );
  }
}


export default Administration; */
