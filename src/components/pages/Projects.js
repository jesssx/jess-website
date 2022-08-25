import React, { Component } from "react";
import './Projects.css';
import Navbar from '../modules/Navbar.js';
import Special from '../modules/Special.js';
import writepet from '../../assets/projects/writepet.PNG';
import splash from '../../assets/projects/splash.PNG';
import esp from '../../assets/projects/esp.PNG';
import lwr from '../../assets/projects/lwr.PNG';

class Projects extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <div className='projects-background'>
          <div className='projects'>
            <h2 className="projects-title">SPECIALS</h2>
            <Special 
              title='LWR Recipes and Heterogeneous UI'
              text1='LWR Recipes and Heterogenous UI were my projects during my summer internship at Salesforce. I created the Static Generation
                      and Multiple Router Outlet recipes which customers can refer to as example templates using LWR (Lightning Web Runtime). I also started 
                      implementing Heterogeneous UI which aims to resolve module imports from different servers and hosts.'
              text2='These projects were based in Typescript. LWR Recipes involved using LWR templates, and 
                      Heterogeneous UI involved introducing new configurations and changing the flow of how modules imports are resolved.'
              link='https://developer.salesforce.com/docs/platform/lwr/guide/lwr-intro.html'
              linkTitle='View'
              optional=''
              preview={lwr}/>

            <Special 
              title='The Write Pet'
              text1='The Write Pet serves as a web application where users journal while raising an
                    adorable, virtual pet! Users are encouraged to journal consistently in order to keep
                    their pet happy. They take care of their pet by taking care of themselves <3'
              text2='This web app was created using React and MongoDB and deployed on Heroku. I drew all
                      the assets using Adobe Illustrator. This project was made by my friend and me for a class/competition called WebLab, where we placed 4th.'
              link='http://the-write-pet.herokuapp.com/'
              linkTitle='Visit'
              optional='https://weblab.mit.edu/winners/'
              optionalTitle='WebLab'
              preview={writepet}/>

            <Special 
              title='Splash'
              text1='Splash is what the HackMIT team calls our annual registration website for our hackathon. As the previous marketing head
                      and dev team member, I helped to make the assets as well as code the site.'
              text2='All of our assets are made using Adobe Illustrator, and the websites is composed of standard
                      HTML, Javascript, and CSS.'
              link='https://hackmit.org/'
              linkTitle='Visit'
              optional=''
              preview={splash}/>

            <Special 
              title='ESPace Invader'
              text1='ESPace Invader is a two-player game using ESP32S2 Arduinos. With proper configurations of joysticks, LED screen,
                      buttons, Inertial Measurement Unit (IMU), and sound buzzer, two players can battle it out with their spaceships 
                      during a fast-paced one minute match. Bullets travel from one screen to another, allowing for strategy and more 
                      immersion.'
              text2='I worked on this game as a final project for a class alongside three other teammates. All tools and equipment have
                      been mentioned above, and all code is in C++.'
              link='https://www.youtube.com/watch?v=URzkTFBDie4'
              linkTitle='Visit'
              optional=''
              preview={esp}/>
          </div>
        </div>
        <Navbar/>
      </>
    );
  };
}

export default Projects;
