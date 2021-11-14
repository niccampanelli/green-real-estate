import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './View/Home/';
import Contact from './View/Contact';
import Registration from './View/Registration';
import Details from './View/Details';
import Search from './View/Search';
import RedirectTo from './View/Redirect';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/imovel" component={Details}/>
                <Route path='/sobre' component={Contact}/>
                <Route path='/registro' component={Registration}/>
                <Route path='/pesquisa' component={Search}/>
                <Route path='/redirect' component={RedirectTo}/>
            </Switch>
        </BrowserRouter>
    );
}