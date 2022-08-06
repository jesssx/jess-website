import React, { Component } from "react";
import './About.css';
import Navbar from '../modules/Navbar.js';
import blackboard from '../../assets/blackboard.svg';
import bear from '../../assets/bea.svg';

class About extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <div className='about-background'>
          <Navbar/>
          <div className='about'>
            <div className='blackboard-container'>
              <img src={blackboard} className="blackboard" alt="blackboard"/>
              <h3 className='blackboard-selector'>BIO</h3>
            </div>
            <img src={bear} className="bear" alt="bear"/>
          </div>
        </div>
      </>
    );
  };
}

export default About;
