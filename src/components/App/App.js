import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { scaleRotate as Menu } from 'react-burger-menu';
//import logo from './logo.svg';
import './App.scss';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainWindow from './MainWindow';
import MapWindow from './MapWindow';
import Form from './Form';
import MapWithList from './MapWithList';

import HamburgerMenu from './HamburgerMenu';
import SuccessView from "./SuccessView";
import HowItWorks from "./HowItWorks";
import About from './About';


const App = () => {


    return (
        <>
            <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >

                <a href="/#/" className="bm-item" style={{ display: "block" }}><span>#home</span></a>
                <a href="/#/howiworks" className="bm-item" style={{ display: "block" }}><span>#howItWorks</span></a>
                <a href="/#/form" className="bm-item" style={{ display: "block" }}><span>#createGroup</span></a>
                <a href="/#/about" className="bm-item" style={{ display: "block" }}><span>#aboutMe</span></a>
            </Menu>
            <div id="outer-container">
                <div id="header" display="flex">
                    <div id="logoWrapper">PracticeTogether
                    <div></div>
                    </div>

                </div>
                <div id="page-wrap">
                    <HashRouter>
                        <Switch>
                            <Route exact path='/' component={MainWindow} />
                            <Route exact path='/map/:latlon' component={MapWithList} />
                            <Route exact path='/form/:latlon' component={Form} />
                            <Route exact path='/success/:group' component={SuccessView} />
                            <Route exact path='/howiworks' component={HowItWorks} />
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </HashRouter>
                    <div id="photoDiv">
                        <div></div>
                    </div>

                    <div id="aboutUs">
                        <div id="aboutWrapper">
                            <div className="aboutDiv" id="aboutDivFirst">
                                <div id="first"></div>
                                <p>Wiesz, ze najwiekszym problemem dzisiejszych czasów jest samotność i brak czasu? Dlatego checemy pomóc tworzyć grupy ludzi motywujących się na własnym, lokalnym podwórku. Chcemy tworzyć autentyczne wiezi, wykorzystując internet a nie trwać w nim. Chcemy wyjść wspólnie z domu, spotkać sie z freekami o tej samej zajawce i stworzyć prawdziwe  lokalne Community!! </p>

                            </div>
                            <div className="aboutDiv">
                                <div id="second"></div>
                                <p>Przyglądaj się swojemu ciału i patrz co mu słuzy. Dostosuj rodzaj aktywności fizycznej do tego co uspokoaja Twoją głowę. Jesteśmy systemem naczyń połączonych dlatego chcemy działać całościowo, łączyć aktywnośc fizyczną z czyszczeniem głowy a to wszytsko połaczyc w serie nawyków, które małymi ktokami zmienią naszą codzienność! Pamiętaj o tym! Jesteś sumą swoich myśli! </p>

                            </div>
                            <div className="aboutDiv">
                                <div id="third"></div>
                                <p>Wszytskim nam dzisiaj brakuje czasu, mieszkamy w róznych częściach naszych miast, mamy napięte grafiki, a nasze to do listy są w ciągłej gotowości.. A co gdbyśmy umawiali się z sąsiadem z bloku na przecikwo pobiegać? Nowa relacja, nowe doświadczenie, wymiana poglądów i niesamowita oszczedność czasu! Pomyśl o tym!!</p>

                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <div id="footer">
                {/* <logo>All </logo> */}
                <div id="socialMedia">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                </div>

            </div>
        </>
    );
};

export default App;
