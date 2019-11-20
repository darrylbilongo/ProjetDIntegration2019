import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';

// Components
import Login from './components/Login';
import Home from './components/Home';
//import Error from './components/Error';
import Profile from "./components/Profile";
import Register from "./components/Register";
import Team from './components/Team';

import Admin from './components/Admin';
<<<<<<< HEAD
import Team from './components/Team';
=======
import Layout from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
>>>>>>> master
=======
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Administration from './components/Admin';
>>>>>>> 2dfb7b7f22d5f2ba831135fc7aa0418c94ab04ae

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
            <Route path="/team" component={Team} />
<<<<<<< HEAD
            <Route path="/admin" component={Admin} />
            <Route path="/team" component={Team} />
            <Route component={Error}/>
          </Switch>  
=======
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/calendar" component={Calendar}/>
            <Route path="/admin" component={Administration}/>
            {/*<Route component={Error}/>*/}
          </div>
          <Footer/>
          </div>  

>>>>>>> 2dfb7b7f22d5f2ba831135fc7aa0418c94ab04ae
        </Router>
      </Layout>
    );
  }
}

export default App;
 