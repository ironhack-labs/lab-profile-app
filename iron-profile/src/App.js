import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import ProtectedRoute from './auth/protected-route.js'
import Profile from './components/Profile';
import Home from './components/Home';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: null
        };
    }
    getTheUser = (userObj) => {
        this.setState({loggedInUser: userObj})
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route
                        path='/signup'
                        render={(props) => <Signup {...props} callback={this.getTheUser}/>}/>
                    <Route
                        path='/login'
                        render={(props) => <Login {...props} callback={this.getTheUser}/>}/>
                    <ProtectedRoute
                        user={this.state.loggedInUser}
                        callback={this.getTheUser}
                        path='/profile'
                        component={Profile}/>
                    <Route
                        exact
                        path='/logout'
                        render={(props) => <Logout {...props} callback={this.getTheUser}/>}/>
                </Switch>
            </div>
        );
    }

}

export default App;