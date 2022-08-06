import React, { Component } from "react";
import './Home.css';
import Navbar from '../modules/Navbar.js';
import cafe from '../../assets/cafe.svg';
import chalkboard from '../../assets/chalkboard.svg';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <div className='home-background'>
          <Navbar/>
          <div className='home'>
            <img src={cafe} className="cafe" alt="cafe"/>
            <img src={chalkboard} className="chalkboard" alt="chalkboard"/>
          </div>
        </div>
      </>
    );
  };
}

export default Home;
