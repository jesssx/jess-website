import React, { Component } from "react";
import './Art.css';
import Navbar from '../modules/Navbar.js';
import Menu from '../modules/Menu.js';
import jiangShan from '../../assets/art/jiangShan.jpg';
import tranquil from '../../assets/art/tranquilMountains.jpg';
import rolling from '../../assets/art/rollingClouds.jpg';
import wild from '../../assets/art/wildYellow.jpg';
import spring from '../../assets/art/springInTheMountains.JPG';
import blue from '../../assets/art/blue.jpg';
import lazy from '../../assets/art/lazyAfternoon.jpg';
import regret from '../../assets/art/regret.jpg';
import light from '../../assets/art/lightOnWatch.jpg';
import gourd from '../../assets/art/gourdOnGourd.jpg';
import wolf from '../../assets/art/loneWolf.jpg';
import fullBloom from '../../assets/art/fullBloom.jpg';
import primarina from '../../assets/art/primarina.jpg';
import bp from '../../assets/art/blueprint22.PNG';
import splash21 from '../../assets/art/splash21.PNG';
import splash22 from '../../assets/projects/splash.PNG';
import kirbyPrev from '../../assets/art/kirbyPreview.PNG';
import niceToMeetYou from '../../assets/art/niceToMeetYou.png';

class Art extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <div className='art-background'>
          <Navbar/>
          <div className='art-page-container'>
            <h2 className="art-title">MENU</h2>
            <div className='art'>
              <Menu 
                artUrl='jiangShan'
                artTitle='JiangShan'
                artPiece={jiangShan}/>

              <Menu 
                artUrl='tranquilMountains'
                artTitle='Tranquil Mountains'
                artPiece={tranquil}/>

              <Menu 
                artUrl='rollingClouds'
                artTitle='Rolling Clouds'
                artPiece={rolling}/>

              <Menu 
                artUrl='wildYellow'
                artTitle='Wild Yellow'
                artPiece={wild}/>

              <Menu 
                artUrl='springInTheMountains'
                artTitle='Spring in the Mountains'
                artPiece={spring}/>

              <Menu 
                artUrl='blueSpring'
                artTitle='Blue Spring'
                artPiece={blue}/>

              <Menu 
                artUrl='lazyAfternoon'
                artTitle='Lazy Afternoon'
                artPiece={lazy}/>

              <Menu 
                artUrl='regret'
                artTitle='Regret'
                artPiece={regret}/>

              <Menu 
                artUrl='lightOnWatch'
                artTitle='Light on Watch'
                artPiece={light}/>

              <Menu 
                artUrl='gourdOnGourd'
                artTitle='Gourd on Gourd'
                artPiece={gourd}/>

              <Menu 
                artUrl='loneWolf'
                artTitle='Lone Wolf'
                artPiece={wolf}/>

              <Menu 
                artUrl='fullBloom'
                artTitle='Full Bloom'
                artPiece={fullBloom}/>

              <Menu 
                artUrl='primarina'
                artTitle='Primarina'
                artPiece={primarina}/>

              <Menu 
                artUrl='blueprint22'
                artTitle='Blueprint22'
                artPiece={bp}/>

              <Menu 
                artUrl='splash21'
                artTitle='Splash21'
                artPiece={splash21}/>

              <Menu 
                artUrl='splash22'
                artTitle='Splash22'
                artPiece={splash22}/>

              <Menu 
                artUrl='kirbyAnimation'
                artTitle='Kirby Animation'
                artPiece={kirbyPrev}/>

              <Menu 
                artUrl='niceToMeetYou'
                artTitle='Nice To Meet You'
                artPiece={niceToMeetYou}/>

            </div>
          </div>
        </div>
      </>
    );
  };
}

export default Art;
