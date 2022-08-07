import React, { Component } from "react";
import "./Special.css";

class Special extends Component{
    constructor(props) {
        super(props);
    }
    
      render() {
        let display = 'hidden-link'; 
        if (this.props.optional !== ''){
            display = 'show-link'; 
        }
        return (
            <>
                <div className='special-container'>
                    <div className='special-col'>
                        <div className='special-title'>{this.props.title}</div>
                        <div className='special-text'>{this.props.text1}</div>
                        <div className='special-text'>{this.props.text2}</div>
                    </div>

                    <div className='special-col'>
                        <div className='special-preview'>
                            <img src={this.props.preview} className="preview" alt="preview"/>
                        </div>

                        <div className='links'>
                            < a href={this.props.link} className='special-link' target='_blank'>{this.props.linkTitle}</a>
                            < a href={this.props.optional} className={'special-link ' + display} target='_blank'>{this.props.optionalTitle}</a>
                        </div>

                    </div>
                </div>
            </>
        );
      }
    }
export default Special;