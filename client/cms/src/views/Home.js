import React from "react";
import Style from "style-it";
import Jumbotron from 'react-bootstrap/jumbotron';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Home() {
  return Style.it(`
      .homeBackground {
        background-color: rgba(0, 0, 0, 0.7);
        height: 92.5vh;
        display: flex;
        justify-content: center;
      }
      
      .homeBackground::before {
        content: '';
        position: absolute;
        top: 7.5vh;
        left: 0;
        height: 92.5vh;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/background.jpeg');
        z-index: -1;
      }

      .link {
        color: '#fff',
        text-decoration: 'none'
      }

      .jumbo {
        padding: 30px;
        margin-top: 80px;
        text-align: center;
        background-color: rgba(125,184,227,.6);
        height: 35%;
        width: 70%;
        border-radius: 5px;
        color: #fff; 
      }

      .myH1 {
        margin: 20px 0 0;
        font-size: 50px;
      }

      .myP {
        font-size: 25px;
        margin-top: 15px;
      }

      .myButton {
        font-size: 20px;
        margin-top: 10px;
      }

      .myLink {
        color: #fff;
        text-decoration: none;
      }
    `,
    <div className="homeBackground">
      <Jumbotron className="jumbo">
        <h1 className="myH1">
          <i class="fas fa-laugh-beam"></i> Welcome To Paradise Contriver! <i class="fas fa-laugh-beam"></i></h1>
        <p className="myP">
          We offer high quality holiday destinations for you to enjoy your holiday!
        </p>
        <p>
          <Button variant="success" className="myButton">
            <NavLink className="myLink" to="/login">
              <i class="fas fa-sign-in-alt"></i> Login
            </NavLink>
          </Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home;