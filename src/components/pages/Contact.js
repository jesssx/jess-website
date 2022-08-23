import React, { Component } from "react";
import './Contact.css';
import Navbar from '../modules/Navbar.js';
import table from '../../assets/table.svg';
import card from '../../assets/contact.svg';
import tableMobile from '../../assets/mobile-table_1.svg';
import cardMobile from '../../assets/mobile-contact.svg';

class Contact extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <div className='contact-background'>
          <div className='table'></div> 

          <div className='contact'>
            <img src={table} className="table-top" alt="table"/>
            <div className='card-container'>
              <img src={card} className="card" alt="card"/>
              <a href='mailto:jjx@mit.edu' target='_blank' className='contact-link'>email</a>
              <a href='https://www.linkedin.com/in/jessica-xu-145a5821b/' target='_blank' className='contact-link'>linkedin</a>
            </div>
          </div>

          <div className='contact-mobile'>
            <img src={tableMobile} className="table-top-mobile" alt="table"/>
            <div className='card-container-mobile'>
              <img src={cardMobile} className="card-mobile" alt="card"/>
              <div className='mobile-links'>
                <a href='mailto:jjx@mit.edu' target='_blank' className='contact-link-mobile'>email</a>
                <a href='https://www.linkedin.com/in/jessica-xu-145a5821b/' target='_blank' className='contact-link-mobile'>linkedin</a>
              </div>            
            </div>
          </div>

          <Navbar/>
        </div>
      </>
    );
  };
}

export default Contact;
