import React, { Component } from "react";
import './Contact.css';
import Navbar from '../modules/Navbar.js';
import table from '../../assets/table.svg';
import card from '../../assets/contact.svg';

class Contact extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <div className='contact-background'>
          <div className='contact'>
            <img src={table} className="table" alt="table"/>
            <img src={card} className="card" alt="card"/>
            <div className='card-container'>
              <div className='card-text'>Thanks for visiting!</div>
              <div className='card-text'>Stay in touch :)</div>
              <div className='contact-buttons'>
                <a href='mailto:jjx@mit.edu' target='_blank' className='contact-link'>email</a>
                <a href='https://www.linkedin.com/in/jessica-xu-145a5821b/' target='_blank' className='contact-link'>linkedin</a>
              </div>
            </div>
            <Navbar/>
          </div>
        </div>
      </>
    );
  };
}

export default Contact;
