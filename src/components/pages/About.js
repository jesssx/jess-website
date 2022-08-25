import React, { Component } from "react";
import './About.css';
import Navbar from '../modules/Navbar.js';
import blackboard from '../../assets/blackboard.svg';
import bear from '../../assets/bear.svg';
import blackboardMobile from '../../assets/mobile_blackboard.svg';
import bearMobile from '../../assets/mobile_bear.svg';

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      bio: true,
    }
  }

  handleButtonClickBio = () => {
    this.setState({ bio: true});
  };

  handleButtonClickClasses = () => {
    this.setState({ bio: false});
  };

  render(){
    let bio = 'show';
    let classes = 'hide';
    
    if (this.state.bio){
      bio = 'show';
      classes = 'hide';
    } else {
      bio = 'hide';
      classes = 'show';
    }

    return (
      <>
        <div className='about-background'>
            <div className='about'>
              <div className='blackboard-container'>
                <img src={blackboard} className="blackboard" alt="blackboard"/>

                <div className='words'>

                  <div className='select'>
                    <button className={'selector ' + bio} onClick= { () => {this.handleButtonClickBio();}}>BIO</button>
                    <h3 className = 'selector divider'> | </h3>
                    <button className={'selector ' + classes} onClick= { () => {this.handleButtonClickClasses();}}>CLASSES</button>
                  </div>

                  <div className='info'>
                    <div className={'bio ' + bio}>
                      <p>Hi there, I'm Jessica (Jess), a current junior studying Electrical Engineering and Computer Science at MIT.
                      I'm an artist and engineer with recent interests in web development, UI/UX, game design, animation, and Chinese watercolor painting.</p>
                      <p>Outside of work-related projects, I spend my time playing video games, creating art, playing badminton, and hanging out with friends (*´︶`*)♡</p>
                      <p>Hit me up for cool projects or game recommendations ★</p>
                    </div>

                    <div className={'classes ' + classes}>
                      <div>
                        <p>✿ Spring 2022 ✿</p>
                        <ul className="classlist">
                          <li>Circuits and Electronics (6.002)</li>
                          <li>Elements of Software Construction (6.031)</li>
                          <li>Introduction to EECS via Interconnected Embedded Systems (6.08)</li>
                          <li>Performance Media (21M.840)</li>
                        </ul>
                      </div>

                      <div>
                        <p>✧ Fall 2021 ✧</p>
                        <ul className="classlist">
                          <li>Computation Structures (6.004)</li>
                          <li>Introduction to Algorithms (6.006)</li>
                          <li>Introduction to Machine Learning (6.036)</li>
                          <li>Differential Equations (18.03)</li>
                          <li>Introduction to Media Studies (CMS.100)</li>
                        </ul>
                      </div>

                      <div>
                        <p>✿ Spring 2021 ✿</p>
                        <ul className="classlist">
                          <li>Fundamentals of Programming (6.009)</li>
                          <li>Math For Computer Science (6.042)</li>
                          <li>Physics II (8.02)</li>
                          <li>Scinece, Technology, and the World (STS.004)</li>
                        </ul>
                      </div>

                        <div>
                          <p>☆ IAP 2021 ☆</p>
                          <ul className="classlist">
                            <li>Web Lab: Programming and Competition (6.148)</li>
                          </ul>
                        </div>

                        <div>
                          <p>✧ Fall 2020 ✧</p>
                          <ul className="classlist">
                            <li>Introduction to Solid-State Chemistry (3.091)</li>
                            <li>Physics I (8.01)</li>
                            <li>Multivariable Calculus (18.02)</li>
                            <li>GPS: Where Are You? (12.A56)</li>
                            <li>Riots, Strikes, and Conspiricies in American History (21H.226)</li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={bear} className="bear" alt="bear"/>
            </div>

            <div className='about-mobile'>
              <div className='blackboard-container'>
                <img src={blackboardMobile} className="blackboard" alt="blackboard"/>

                <div className='words'>

                  <div className='select'>
                    <button className={'selector ' + bio} onClick= { () => {this.handleButtonClickBio();}}>BIO</button>
                    <h3 className = 'selector divider'> | </h3>
                    <button className={'selector ' + classes} onClick= { () => {this.handleButtonClickClasses();}}>CLASSES</button>
                  </div>

                  <div className='info'>
                    <div className={'bio ' + bio}>
                      <p>Hi there, I'm Jessica (Jess), a current junior studying Electrical Engineering and Computer Science at MIT.
                      I'm an artist and engineer with recent interests in web development, UI/UX, game design, animation, and Chinese watercolor painting.</p>
                      <p>Outside of work-related projects, I spend my time playing video games, creating art, playing badminton, and hanging out with friends (*´︶`*)♡</p>
                      <p>Hit me up for cool projects or game recommendations ★</p>
                    </div>

                    <div className={'classes ' + classes}>
                      <div>
                        <p>✿ Spring 2022 ✿</p>
                        <ul className="classlist">
                          <li>Circuits and Electronics (6.002)</li>
                          <li>Elements of Software Construction (6.031)</li>
                          <li>Introduction to EECS via Interconnected Embedded Systems (6.08)</li>
                          <li>Performance Media (21M.840)</li>
                        </ul>
                      </div>

                      <div>
                        <p>✧ Fall 2021 ✧</p>
                        <ul className="classlist">
                          <li>Computation Structures (6.004)</li>
                          <li>Introduction to Algorithms (6.006)</li>
                          <li>Introduction to Machine Learning (6.036)</li>
                          <li>Differential Equations (18.03)</li>
                          <li>Introduction to Media Studies (CMS.100)</li>
                        </ul>
                      </div>

                      <div>
                        <p>✿ Spring 2021 ✿</p>
                        <ul className="classlist">
                          <li>Fundamentals of Programming (6.009)</li>
                          <li>Math For Computer Science (6.042)</li>
                          <li>Physics II (8.02)</li>
                          <li>Scinece, Technology, and the World (STS.004)</li>
                        </ul>
                      </div>

                        <div>
                          <p>☆ IAP 2021 ☆</p>
                          <ul className="classlist">
                            <li>Web Lab: Programming and Competition (6.148)</li>
                          </ul>
                        </div>

                        <div>
                          <p>✧ Fall 2020 ✧</p>
                          <ul className="classlist">
                            <li>Introduction to Solid-State Chemistry (3.091)</li>
                            <li>Physics I (8.01)</li>
                            <li>Multivariable Calculus (18.02)</li>
                            <li>GPS: Where Are You? (12.A56)</li>
                            <li>Riots, Strikes, and Conspiricies in American History (21H.226)</li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={bearMobile} className="bear" alt="bear"/>
            </div>
          </div>
          <Navbar/>
      </>
    );
  };
}

export default About;
