import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import './App.css';

// Components
import About from './components/About';
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';
import Team from './components/Team';
import Admin from './components/Admin';
import Layout from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends React.Component {
  render(){
    return (
      <Layout>
        <Router>
          <div className="container">
          <NavigationBar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/users" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/admin" component={Admin} />
            <Route component={Error}/>
          </Switch>
          </div>  
        </Router>
      </Layout>
    );
  }
}

export default App;
 