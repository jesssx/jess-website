import React, { Component } from "react";
import './Art.css';
import Navbar from '../modules/Navbar.js';

class Art extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <div className='art-background'>
          <Navbar/>
          <h2 className="art-title">MENU</h2>
          <div className='art'>
          </div>
        </div>
      </>
    );
  };
}

export default Art;
