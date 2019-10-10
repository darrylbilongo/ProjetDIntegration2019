import React from 'react';
import './App.css';
import Menus from './components/Menus';
import NavBar from './components/NavBar';
import About from './components/About';
import Login from './components/Login';


class App extends React.Component {
  render(){
    return (
      <div>
          <NavBar></NavBar>
          <Login></Login>
          <About></About>
      </div>
    );
  }
}

export default App;
 