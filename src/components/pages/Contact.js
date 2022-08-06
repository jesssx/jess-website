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
            <div className='card-container'>
              <img src={card} className="card" alt="card"/>
              <a href='mailto:jjx@mit.edu' target='_blank' className='contact-link'>email</a>
              <a href='https://www.linkedin.com/in/jessica-xu-145a5821b/' target='_blank' className='contact-link'>linkedin</a>
            </div>
            <Navbar/>
          </div>
        </div>
      </>
    );
  };
}

export default Contact;
