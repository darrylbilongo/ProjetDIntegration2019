import React from 'react';
import './App.css';

// Components
import About from './components/About';
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Admin from './components/Admin';

class App extends React.Component {
  render(){
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route component={Error}/>
          </Switch>  
        </Router>
    );
  }
}

export default App;
 