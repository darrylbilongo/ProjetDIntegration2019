import React from 'react';
import styled from 'styled-components';
import logo from '../Logo/output-onlinepngtools.png'
import fond from '../Logo/backpack-climber.jpg'

class Home extends React.Component {
    render(){
      return (
        <HomeComponent>
          <div id="carrousel" class="carousel slide" data-ride="carousel">

          <ul className="carousel-indicators">
            <li data-target="#carrousel" data-slide-to="0" class="active"></li>
            <li data-target="#carrousel" data-slide-to="1"></li>
            <li data-target="#carrousel" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">   
              <img src={fond} id="fond" alt="fond vert"></img>
              <img src={logo} class="centered" id="logo" alt="logo EasyGame"></img>
              <button type="button" class="btn btn-primary dropdown-toggle btn" data-toggle="dropdown">
                Login or Register
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/Login" >Login</a>
                <a class="dropdown-item" href="#/Register">Register</a>
              </div>
            </div>
            <div class="map-responsive carousel-item ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9137252234977!2d4.6099503153492885!3d50.66586237970143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17e7138d0942d%3A0x8141721ace507d70!2sEphec%20Louvain-la-Neuve!5e0!3m2!1sfr!2sbe!4v1573080241868!5m2!1sfr!2sbe" 
              class="map" allowfullscreen title="frame"></iframe>
            </div>
          </div>
          <a class="carousel-control-prev map" href="#carrousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#carrousel" data-slide="next">
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
        width:40%;
        height:50%;
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
      .btn{
        position: absolute;
        top:70%;
        left:80%;
        z-index:10;
        font-size: 80%;
        box-sizing: content-box;
        transform: translate(-50%, -50%);
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