import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Art from "./pages/Art.js";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact.js";
import NotFound from "./pages/NotFound.js";
import Artwork from './modules/Artwork.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Router>
          <Home
              path="/"
          />
          <About
              path="/about"
          />
          <Art
              path="/art"
          />
          <Projects
              path="/projects"
          />
          <Contact
              path="/contact"
          />
          <Artwork
              path="art/:artwork"
          />
          <NotFound default />
        </Router>
      </>
    );
  };
}

export default App;
