import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component }  from 'react';

import Home from './Container/Home'
import Activity from './Container/Activity'
import Explore from './Container/Explore'

export function route(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/activity" component={Activity}/>
                <Route path="/explore" component={Explore}/>
            </Switch>
        </Router>
    )
}