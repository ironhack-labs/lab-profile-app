import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />  
        <Route path='/login' component={Login} />  
    </Switch>
);

export default Router;