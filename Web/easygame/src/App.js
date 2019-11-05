import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';

// Components
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';
import Profile from "./components/Profile";
import Register from "./components/Register";
import Team from './components/Team';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Administration from './components/Admin';

class App extends React.Component {
  render(){
    return (
      <Layout>
        <Router>
          <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/team" component={Team} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Administration} />
            <Route component={Error}/>
          </Switch>
          </div>  
        </Router>
      </Layout>
    );
  }
}

export default App;
 