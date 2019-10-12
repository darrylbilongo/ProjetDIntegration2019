import React from 'react';
import './App.css';
import Menus from './components/Menus';
import NavBar from './components/NavBar';
import About from './components/About';
import Login from './components/Login';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <NavBar ></NavBar>
          <Login></Login>
          <Switch>
            {/*<Route exact path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/about" Component={About}></Route>*/}
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
 