import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu';
import "./HamburgerMenu.scss";



class HamburgerMenu extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                <Link to="/" className="bm-item" style={{ display: "block" }}><span>#home</span></Link>
                <Link to="/howiworks" className="bm-item" style={{ display: "block" }}><span>#howItWorks</span></Link>
                <Link to="/form" className="bm-item" style={{ display: "block" }}><span>#createGroup</span></Link>
                <Link  to="/about" className="bm-item" style={{ display: "block" }}><span>#aboutMe</span></Link>
                <Link  to="/contact" className="bm-item" style={{ display: "block" }}><span>#contactUs</span></Link>

            </Menu>
        );
    }
}

export default HamburgerMenu;