import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component }  from 'react';

import Home from './Container/Home'

export function route(){
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}