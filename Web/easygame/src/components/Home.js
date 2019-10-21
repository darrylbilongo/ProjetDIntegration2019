import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import logo from '../Logo/logo_transparent.png'
import fondvert from '../Logo/green-material-background.jpg'

class Home extends React.Component {
    render(){
      return (
        <HomeComponent>
          <div id="demo" class="carousel slide" data-ride="carousel">

          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">   
              <img src={fondvert} id="fond" alt="fond vert"></img>
              <img src={logo} class="centered" id="logo" alt="logo EasyGame"></img>
              <h1 class="welcome">Welcome</h1>
              <a href="/login" class="btn btn-info centered btn" role="button">Sign in</a>
            </div>
            <div class="map-responsive carousel-item container-fluid">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Ephec+lln" 
              class="map" width="1600" height="900" allowfullscreen></iframe>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        </HomeComponent>
      );
    } 
}

const HomeComponent = styled.div`
      background-color:grey;
      .imgmenus{
        width:100%;
      }
      .map{
        margin: 0;
        padding: 0;
      }
      div {
        color: black;
        width: 100%;
          
      .carousel-inner img {
        height: 100%;
        width: 100%;
      }
      .homeText{
        color: white;
      }
      .welcome{
        position: absolute;
        top: 40%;
        color: #D0F0C0
        left: 50%;
        color: #D0F0C0
        transform: translate(-50%, -50%);
        font-size: 500%;
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
        top: 20%;
        left: 50%;
        width: 60%;
        height: 60%;
        transform: translate(-50%, -50%);
        font-size: 500%;
      }
      #fond {
        filter: blur(4px);
        -webkit-filter: blur(4px);

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
      .btn{
        position: absolute;
        top: 70%;
        left: 50%;
      }
`;

export default Home;