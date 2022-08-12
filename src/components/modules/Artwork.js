import React, { Component } from "react";
import "./Artwork.css";
import Navbar from './Navbar.js';
import NotFound from "../pages/NotFound";
import jiangShan from '../../assets/art/jiangShan.jpg';
import niceToMeetYou from '../../assets/art/niceToMeetYou.png';
import fullBloom from '../../assets/art/fullBloom.jpg';

class Artwork extends Component{
    constructor(props) {
        super(props);
        this.state = {
            artDict : 
                {'jiangShan': ['JiangShan', '80x80in Chinese Watercolor on Xuan rice paper', 
                    'description', jiangShan],
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
                        <img src={artPiece} className='artwork-image' alt={artTitle}/>
                    </div>
                </div>
            </>
        );
      }
    }
export default Artwork;