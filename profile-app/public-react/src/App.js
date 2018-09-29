import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import  HomePage  from './components/HomePage/HomePage';
import Signup from './components/auth/Signup/Signup';
import Login from './components/auth/Login/Login';
import ProfilePage from './components/Profile/ProfilePage';
import AuthService from './components/auth/auth-service';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    fetchUser = () => {
        if( this.state.loggedInUser === null ){
            this.service.loggedin()
                .then(response =>{
                    this.setState({
                        loggedInUser:  response
                    })
                })
                .catch( err =>{
                    this.setState({
                        loggedInUser:  false
                    })
                })
        }
    };

    componentWillMount() {
        this.fetchUser();
    }

    getTheUser= (userObj) => {
        this.setState({
            loggedInUser: userObj
        })
    };

    logoutUser = (history) =>{
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                history.push('/');
            })
    };


    render() {
    return (
      <Switch>
          <Route exact path="/" render = {() => {
              return this.state.loggedInUser ? (<Redirect to="/profile" />) : (<HomePage />)}}
          />
          <Route exact path="/profile" render = { (props) => this.state.loggedInUser ? <ProfilePage {...props} userInSession={ this.state.loggedInUser } logout={ this.logoutUser }/> : <HomePage />} />
          <Route exact path="/signup" render= { (props) => <Signup {...props} getUser={this.getTheUser}/>} />
          <Route exact path="/login" render= { (props) => <Login {...props} getUser={this.getTheUser}/>}/>
      </Switch>
    );
  }
}

export default App;
