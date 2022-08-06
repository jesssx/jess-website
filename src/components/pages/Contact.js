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
          <div>
            <Navbar/>

          </div>
          <div className='contact'>
            <img src={table} className="table" alt="table"/>
            <img src={card} className="card" alt="card"/>
          </div>
        </div>
      </>
    );
  };
}

export default Contact;
