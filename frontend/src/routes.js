import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './View/Home/';
import Contact from './View/Contact';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/sobre' component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
}