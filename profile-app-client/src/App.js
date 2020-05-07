import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/Profile';
import AuthService from './components/auth/auth-service';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService(); 
    this.getTheUser = this.getTheUser.bind(this);
  }


  fetchUser() {
    // console.log("inside fetchUser");
    if (this.state.loggedInUser === null) {
      // console.log("NULL inside fetchUser");
      this.service
        .loggedin()
        .then((response) => {
          // console.log("SUCCESS inside fetchUser");

          this.setState({
            loggedInUser: response,
          });
        })
        .catch((err) => {
          // console.log("ERROR inside fetchUser");

          this.setState({
            loggedInUser: false,
          });
        });
    }
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj,
    });
  } 

  render() {
    this.fetchUser();
    if(this.state.loggedInUser){
      
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact user={this.state.loggedInUser} path='/signup' component={Signup} />
            <Route exact path='/login' render={(props) => (
                  <Login getUser={this.getTheUser} {...props} />)}/>
            <Route exact path='/profile' render={(props) => (
                  <Profile getUser={this.getTheUser} {...props}/>)}/>
            </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact user={this.state.loggedInUser} path='/signup' component={Signup} />
            <Route exact path='/login' render={(props) => (
              <Login getUser={this.getTheUser} {...props} />)} />
            <Route exact path='/profile' render={(props) => (
              <Profile getUser={this.getTheUser} {...props} />)} />
          </Switch>
        </div>
      );
    }
  }
}
export default App;
