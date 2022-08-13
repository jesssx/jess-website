import React, { Component } from "react";
import "./Artwork.css";
import Navbar from './Navbar.js';
import NotFound from "../pages/NotFound";
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
import kirby from '../../assets/art/kirby.mp4';
import niceToMeetYou from '../../assets/art/niceToMeetYou.png';

class Artwork extends Component{
    constructor(props) {
        super(props);
        this.state = {
            artDict : 
                {'jiangShan': ['JiangShan', '80x80in Chinese Watercolor on Xuan rice paper', 
                    'description', jiangShan],
                'tranquilMountains': ['Tranquil Mountains', '10x10in dims', 
                    'description', tranquil],
                'rollingClouds': ['Rolling Clouds', '10x10in dims', 
                    'description', rolling],
                'wildYellow': ['Wild Yellow', '10x10in dims', 
                    'description', wild],
                'springInTheMountains': ['Spring in the Mountains', '10x10in dims', 
                    'description', spring],
                'blueSpring': ['Blue Spring', '10x10in dims', 
                    'description', blue],
                'lazyAfternoon': ['Lazy Afternoon', '10x10in dims', 
                    'description', lazy],
                'regret': ['Regret', '10x10in dims', 
                    'description', regret],
                'lightOnWatch': ['Light on Watch', '10x10in dims', 
                    'description', light],
                'gourdOnGourd': ['Gourd on Gourd', '10x10in dims', 
                    'description', gourd],
                'loneWolf': ['Lone Wolf', '10x10in dims', 
                    'description', wolf],
                'fullBloom': ['Full Bloom', '10x10in dims', 
                    'description', fullBloom],
                'primarina': ['Primarina', '10x10in dims', 
                    'description', primarina],
                'blueprint22': ['Blueprint22', '10x10in dims', 
                    'description', bp],
                'splash21': ['Splash21', '10x10in dims', 
                    'description', splash21],
                'splash22': ['Splash22', '10x10in dims', 
                    'description', splash22],
                'kirbyAnimation': ['Kirby Animation', '10x10in dims', 
                    'description', kirby],
                'niceToMeetYou': ['Nice To Meet You', '10x10in dims', 
                'description', niceToMeetYou],
            }
        }
    }

      render() {
        const artEntry = this.state.artDict[this.props.artwork]; 

        if (artEntry === undefined){
            return (<NotFound/>);
        }
        const [artTitle, artDims, artDesc, artPiece] = artEntry; 
        const artDisplay = artTitle === 'Kirby Animation';
        console.log(artDisplay);
        return (
            <>
                <div className='artwork-background'>
                    <Navbar/>
                    <div className='artwork-container'>
                        <div className='artwork-words'>
                            <div className='artwork-title'>{artTitle}</div>
                            <div className='artwork-dims'>{artDims}</div>
                            <div>{artDesc}</div>
                        </div>
                        <img src={artPiece} className={'artwork-image ' + artDisplay} alt={artTitle}/>
                        <video className={'artwork-animation ' + artDisplay } controls preload="auto">
                            <source src={artPiece} type="video/mp4" />
                        </video>                    
                    </div>
                </div>
            </>
        );
      }
    }
export default Artwork;