import React, { Component } from "react";
import "./Menu.css";
import { navigate } from '@reach/router'

class Menu extends Component{
    constructor(props) {
        super(props);
    }

    handleArtClick = () => {
        navigate(`/art/${this.props.artUrl}`,).then(navigate(0));

    };
    
      render() {
        return (
            <>
                <div className='menu-container' >
                    <div className='artSelect' onClick= { () => {this.handleArtClick();}}>
                        <img src={this.props.artPiece} className="artPiece" alt={this.props.artTitle} />
                        <div className='artTitle'>{this.props.artTitle}</div>
                    </div>
                </div>
            </>
        );
      }
    }
export default Menu;