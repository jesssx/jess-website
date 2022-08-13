import React, { Component } from "react";
import './NotFound.css';
import cat from '../../assets/404cat.svg';

class NotFound extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='notFound-background'>
        <div className='notFound-container'>
          <div>404</div>
          <div>sorry, page not found</div>
          <div className='notFound-home'>
            <a href='/' className='home-link'>home</a>
          </div>
        </div>
        <img src={cat} className='notFound-cat' alt='notFound'/>
      </div>
    );
  };
}

export default NotFound;