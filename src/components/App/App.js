import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

//import logo from './logo.svg';
import './App.scss';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainWindow from './MainWindow';
import MapWindow from './MapWindow';
import Form from './Form';
import SimpleMap from "./SimpleMap";

const App = () => {
    
    return (
        <>
            <div id="header" display="flex">
                <div id="logoWrapper">PracticeTogether
                    <div></div>
                </div>
                <div><i className="fa fa-bars"></i></div>
            </div>
            <div id="container">
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={MainWindow} />
                        <Route exact path='/map/:latlon' component={SimpleMap}/>
                        <Route exact path='/form' component={Form}/>
                    </Switch>
                </HashRouter>
                <div id="photoDiv">
                    <div></div>
                </div>

                <div id="aboutUs">
                    <div id="aboutWrapper">
                        <div className="aboutDiv" id="aboutDivFirst"> 
                        <div id="first"></div>
                        <p>Tylko patrz jak będą robić to, jak w głowie zrobią młynJak będą chcieli cię wyedukować śliczniePatrz, pokażą tobie film, propagandowy film</p>

                        </div>
                        <div className="aboutDiv">
                        <div id="second"></div>
                        <p>Tylko patrz jak będą robić to, jak w głowie zrobią młynJak będą chcieli cię wyedukować śliczniePatrz, pokażą tobie film, propagandowy film</p>

                        </div>
                        <div className="aboutDiv">
                        <div id="third"></div>
                        <p>Tylko patrz jak będą robić to, jak w głowie zrobią młynJak będą chcieli cię wyedukować śliczniePatrz, pokażą tobie film, propagandowy film</p>

                        </div>
                    </div>


                </div>
            </div>


        </>
    );
};

export default App;
