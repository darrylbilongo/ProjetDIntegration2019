import React from 'react';
import styled from 'styled-components';
import logo from '../Logo/output-onlinepngtools.png'
import fond from '../Logo/backpack-climber.jpg'

class Home extends React.Component {
  logOut(e){
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('/');
}
    render(){
      const logoutLink = (
        <a class="btn btn-outline-secondary col-md-8" onClick={this.logOut.bind(this)}>
                       Deconnexion
        </a>
      )
      const loginLink = (
        <a class="btn btn-outline-secondary col-md-8" href="/Login" >Se connecter</a>
      )

      return (
        <HomeComponent>
          <div className="row align-items-center">
            <img src={fond} id="fond" alt="fond vert" class="col"></img>
              <img src={logo} class="centered col-sm-4" id="logo" alt="logo EasyGame" ></img>
          </div>
          <div className="row">
            <div className="col-md-4 menu-home">
              <a className="btn btn-outline-secondary col-md-8" href="/Home">Home</a>
            </div>
            <div className="col-md-4 menu-home">
              <a className="btn btn-outline-secondary col-md-8" href="/Team">Team</a>
            </div>
            <div className="col-md-4 menu-home">
              <a  className="btn btn-outline-secondary col-md-8" href="/About">About</a>
            </div>
          </div>
          <div className="row align-items-center">
        </div>
        </HomeComponent>
      );
    } 
}

const HomeComponent = styled.div`
      .imgmenus{
        width:100%;
      }
      .map{
        margin: 0px;
        padding: 0px;
      }
      .menuHome{
        margin: 0;
        padding: 0;
      }
      .btn{
        margin: 0.3em;
      }
      div {
        color: black;
        width: 100%;
      .carousel-inner{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
      }
      .carousel-inner img {
        height: 100%;
        width: 100%;
      }
      .homeText{
        color: white;
      }
      .welcome{
        position: absolute;
        top: 50%;
        color: #D0F0C0
        left: 50%;
        color: black;
        transform: translate(-50%, -50%);
        font-size: 400%;
        }
      .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 250%;
        text-shadow: 2px 2px #000;
      } 
      #logo {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .row {
          margin: 8px -16px;
        }     
      .row,
        .row > .column {
          padding: 8px;
        } 
      .column {
          float: left;
          width: 25%;
        }
      .row:after {
          content: "";
          display: table;
          clear: both;
        }
      .content {
          background-color: white;
          padding: 10px;
        }
      @media screen and (max-width: 900px) {
          .column {
            width: 50%;
          }
        }
      @media screen and (max-width: 600px) {
          .column {
            width: 100%;
          }
        }
      .map-responsive {
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
      }
      .map-responsive iframe {
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
      }
      .dropdown-menu
      {
        width:30%;
      }
`;

export default Home;