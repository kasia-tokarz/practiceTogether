import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

//import logo from './logo.svg';
import './App.scss';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainWindow from './MainWindow';
import MapWindow from './MapWindow';
import Form from './Form';
import MapWithList from './MapWithList';
// import { scaleRotate as Menu } from 'react-burger-menu';
import HamburgerMenu from './HamburgerMenu';
import SuccessView from "./SuccessView";
import HowItWorks from "./HowItWorks";
import About from './About';
import Contact from './Contact';


const App = () => {

    return (
        <><HashRouter>
            <HamburgerMenu />
            <div id="outer-container">
                <div id="header" display="flex">
                <Link to="/" ><div id="logoWrapper">PracticeTogether
                    <div></div>
                    </div></Link>

                </div>
                    <div id="page-wrap">

                        <Switch>
                            <Route exact path='/' component={MainWindow} />
                            <Route path='/map/:latlon' component={MapWithList} />
                            <Route path='/form/:latlon' component={Form} />
                            <Route path='/success/:group' component={SuccessView} />
                            <Route path='/howiworks' component={HowItWorks} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                        </Switch>

                        <div id="photoDiv">
                            <div></div>
                        </div>

                        <div id="aboutUs">
                            <div id="aboutWrapper">
                                <div className="aboutDiv" id="aboutDivFirst">
                                    <div id="first"></div>
                                    <p className="hashTekst">#makeYourCommunity </p>

                                </div>
                                <div className="aboutDiv">
                                    <div id="second"></div>
                                    <p className="hashTekst">#respectYourBody</p>

                                </div>
                                <div className="aboutDiv">
                                    <div id="third"></div>
                                    <p className="hashTekst">#takeCareAboutYourTime</p>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div id="footer">
                    <div id="leftSide">
                        <p id="footerText">© all rights reserved. Privacy policy & cookies. created by Kasia Tokarz</p>
                    </div>
                    <div id="socialMedia">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                </div>
            </HashRouter>
        </>
            );
        };
        
        export default App;
