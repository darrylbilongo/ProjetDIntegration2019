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
            <img src={fondvert} alt="fond vert"></img>
            <h1 class ="centered">EasyGame</h1>
            </div>
            <div class="carousel-item">
            <img src={logo}c lass="rounded-circle" alt="Cinque Terre"></img>
            </div>
            <div class="carousel-item">
               hello3
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
      div {
        color: black;
        width: 100%;
      }
      .carousel-inner img {
        height: 100%;
        width: 100%;
      }
      .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 500%;
      } 
`;

export default Home;