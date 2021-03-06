import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';

// Components
import Login from './components/Login';
import Home from './components/Home';
//import Error from './components/Error';
import Profile from "./components/Profile";
import Register from "./components/Register";
import Team from './components/Team';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Tracking from './components/Tracking';
import Download from './components/Download';
import About from './components/About';

class App extends React.Component {
  render(){
    return (
      <Layout>
        <Router>
          <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/download" component={Download} />
            <Route path="/calendar" component={Calendar}/>
            <Route path="/tracking" component={Tracking}/>
            {/*<Route component={Error}/>*/}
          </div>
          <Footer/>
          </div>  

        </Router>
      </Layout>
    );
  }
}

export default App;
 