import { scaleRotate as Menu } from 'react-burger-menu';
import React from "react";
import {Component} from "react";
import "./HamburgerMenu.scss";
 
class HamburgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
    
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default HamburgerMenu;