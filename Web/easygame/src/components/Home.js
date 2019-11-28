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
        <a class="btn btn-outline-secondary col-md-8" href="" onClick={this.logOut.bind(this)}>
                       Deconnexion
        </a>
      )
      const loginLink = (
        <a class="btn btn-outline-secondary col-md-8" href="/Login" >Se connecter</a>
      )

      return (
        <HomeComponent>
          <div class="row align-items-center">
            <img src={fond} id="fond" alt="fond vert" class="col"></img>
              <img src={logo} class="centered col-sm-4" id="logo" alt="logo EasyGame" ></img>
          </div>
          <div class="row">
            <div class="col-md-3 menu-home">
              <a class="btn btn-outline-secondary col-md-8" href="/Home">Home</a>
            </div>
            <div class="col-md-3 menu-home">
              <a class="btn btn-outline-secondary col-md-8" href="/Team">Team</a>
            </div>
            <div class="col-md-3 menu-home">
              <a  class="btn btn-outline-secondary col-md-8" href="/About">About</a>
            </div>
            <div class="col-md-3 menu-home">
              {localStorage.usertoken ? logoutLink : loginLink}
            </div>
          </div>
          <div class="row align-items-center">
          <div class="map-responsive col-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9137252234977!2d4.6099503153492885!3d50.66586237970143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17e7138d0942d%3A0x8141721ace507d70!2sEphec%20Louvain-la-Neuve!5e0!3m2!1sfr!2sbe!4v1573080241868!5m2!1sfr!2sbe" 
              class="map" allowfullscreen></iframe>
          </div>
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