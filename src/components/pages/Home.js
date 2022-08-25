import React, { Component } from "react";
import './Home.css';
import Navbar from '../modules/Navbar.js';
import cafe from '../../assets/cafe.svg';
import chalkboard from '../../assets/chalkboard.svg';
import mobileCafe from '../../assets/mobile_cafe.svg';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <div className='home-background'>
          <div className='home'>
            <img src={cafe} className="cafe" alt="cafe"/>
            <img src={chalkboard} className="chalkboard" alt="chalkboard"/>
            <img src={mobileCafe} className="mobile-cafe" alt="cafe"/>
          </div>
          <Navbar/>
        </div>
      </>
    );
  };
}

export default Home;
