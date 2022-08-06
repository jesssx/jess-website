import React, { Component } from "react";
import './Projects.css';
import Navbar from '../modules/Navbar.js';

class Projects extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <div className='projects-background'>
          <Navbar/>
          <div className='projects'>
            <h2 className="projects-title">SPECIALS</h2>
          </div>
        </div>
      </>
    );
  };
}

export default Projects;
