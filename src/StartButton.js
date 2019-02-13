import React from 'react';
import './StartButton.css';
import './App.css'
import smoothiePic from "./images/greenSmoothie.png";
import bannerLeft from "./images/VerticalLeft.jpg";
import bannerRight from "./images/VerticalRight.jpg";

export class StartButton extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick();
    }

    render() {
      return (
        <React.Fragment>
            <img className = "banner-left" src = {bannerLeft} alt = ""/>
            <img className = "banner-right" src = {bannerRight} alt = ""/>
            <div className = "text-center">
                <button className = "button" onClick = {this.handleClick}>Get Started</button>
                <br style = {{lineHeight: 12}}/>
                <img src = {smoothiePic} alt= "" style = {{height: 325, width: 351}}/>
                <br/>
            </div>
        </React.Fragment>
      );
    }
  }
