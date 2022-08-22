import React, { Component, useState } from "react";
import "./Navbar.css";
import { slide as MobileNav } from 'react-burger-menu';

class Navbar extends Component{
    constructor(props) {
        super(props);
    }
    
    
      render() {
        return (
          <>
            <nav className="nav-container">
                <div className='nav'>
                  < a href="/" className="nav-link">HOME</a>
                  < a href="/about" className="nav-link">ABOUT</a>
                  < a href="/art" className="nav-link">ART</a>
                  < a href="/projects" className="nav-link">PROJECTS</a>
                  < a href="/contact" className="nav-link">CONTACT</a>
                </div>
                <div className='nav-mobile'>
                  <MobileNav isOpen={ true } >
                    < a href="/" className="nav-link-mobile">HOME</a>
                    < a href="/about" className="nav-link-mobile">ABOUT</a>
                    < a href="/art" className="nav-link-mobile">ART</a>
                    < a href="/projects" className="nav-link-mobile">PROJECTS</a>
                    < a href="/contact" className="nav-link-mobile">CONTACT</a>
                  </MobileNav>
                </div>
            </nav>
            </>
        );
      }
    }
  
export default Navbar;