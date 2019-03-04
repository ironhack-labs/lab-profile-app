import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Signup from './components/Signup'
import Profile from './components/Profile'
import Login from './components/Login';

export default () => (<Switch>
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
</Switch>)
