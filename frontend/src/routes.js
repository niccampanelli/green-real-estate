import React, { Fragment, useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './View/Home/';
import Contact from './View/Contact';
import Registration from './View/Registration';
import Details from './View/Details';
import Search from './View/Search';
import RedirectTo from './View/Redirect';
import Auth from './View/Auth';
import API from './Services/API';

export default function Routes(){

    const VerifyAuth = (props) => {
        const [authState, setAuthState] = useState(<Fragment/>);

        useEffect(async () => {
            await API.get('/auth').then(result => {
                console.log(props.component);
                if(result.status === 200 && result.data === true)
                    setAuthState(props.component);
            })
            .catch(err => {
                setAuthState(<Redirect to="/autenticar"/>);
            });
        }, []);
        
        useEffect(() => {
            if(authState){
                if(authState === "logged")
                    return props.component;
                else if(authState === "redirect")
                    return <Redirect to="/autenticar"/>
            }
        }, [authState])

        return(
            authState
        );
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/autenticar' component={Auth}/>
                <Route path="/imovel" component={Details}/>
                <Route path='/sobre' component={Contact}/>
                <Route path='/registro' render={(props) => ( <VerifyAuth {...props} component={<Registration/>}/> )}/>
                <Route path='/pesquisa' component={Search}/>
                <Route path='/redirect' component={RedirectTo}/>
            </Switch>
        </BrowserRouter>
    );
}