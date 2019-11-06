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
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Calendar from './components/Calendar';

class App extends React.Component {
  render(){
    return (
      <Layout>
        <Router>
          <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/team" component={Team} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/calendar" component={Calendar}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
          </div>  

        </Router>
      </Layout>
    );
  }
}

export default App;
 