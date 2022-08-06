import React, { Component } from "react";
// import { Link } from "@reach/router";
import "./Navbar.css";

class Navbar extends Component{
    constructor(props) {
        super(props);
    }
    
      render() {
        return (
          <>
            <nav className="nav-container">
                < a href="/" className="nav-link">HOME</a>
                < a href="/about" className="nav-link">ABOUT</a>
                < a href="/art" className="nav-link">ART</a>
                < a href="/projects" className="nav-link">PROJECTS</a>
                < a href="/contact" className="nav-link">CONTACT</a>
                {/* <ul><Link to="/" className="Navbar-link">HOME</Link></ul>
                <ul><Link to="/about" className="Navbar-link">ABOUT</Link></ul>
                <ul><Link to="/art" className="Navbar-link">ART</Link></ul>
                <ul><Link to="/projects" className="Navbar-link">PROJECTS</Link></ul>
                <ul><Link to="/contact" className="Navbar-link">CONTACT</Link></ul> */}
            </nav>
            </>
        );
      }
    }
export default Navbar;