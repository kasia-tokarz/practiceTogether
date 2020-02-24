import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

//import logo from './logo.svg';
import './App.scss';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainWindow from './MainWindow';
import MapWindow from './MapWindow';

const App = () => {
    
    return (
        <>
            <div id="header" display="flex">
                <div>PracticeTogether</div>
                <div><i className="fa fa-bars"></i></div>
            </div>
            <div id="container">
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={MainWindow} />
                        <Route exact path='/map/:latlon' component={MapWindow}/>
                    </Switch>
                </HashRouter>
            </div>

        </>
    );
};

export default App;
