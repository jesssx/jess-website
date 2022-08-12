import React, { Component } from "react";
import './Art.css';
import Navbar from '../modules/Navbar.js';
import Menu from '../modules/Menu.js';
import jiangShan from '../../assets/art/jiangShan.jpg';
import niceToMeetYou from '../../assets/art/niceToMeetYou.png';
import fullBloom from '../../assets/art/fullBloom.jpg';

class Art extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <div className='art-background'>
          <Navbar/>
          <h2 className="art-title">MENU</h2>
            <div className='art'>
              <Menu 
                artUrl='jiangShan'
                artTitle='JiangShan'
                artPiece={jiangShan}/>

              <Menu 
                artUrl='fullBloom'
                artTitle='Full Bloom'
                artPiece={fullBloom}/>

              <Menu 
                artUrl='niceToMeetYou'
                artTitle='Nice To Meet You'
                artPiece={niceToMeetYou}/>

            </div>
        </div>
      </>
    );
  };
}

export default Art;
