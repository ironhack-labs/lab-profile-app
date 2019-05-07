import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getUser = (userObj) => {
    console.log(userObj)
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
       return this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  render(){
    this.fetchUser()
    if (this.state.loggedInUser) {
      return(
        <React.Fragment>
          <div className="App">
            <header className="App-header">              
              <Profile {...this.state.loggedInUser} ></Profile>
            </header>
          </div>
        </React.Fragment>
      );
    }else{
      return(
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Switch>                
                <Route exact path='/signup' render={() => <Signup getUser={this.getUser} />} />
                <Route exact path='/login' render={() => <Login getUser={this.getUser} />} />  
                <Redirect from='/' to='/login'/>             
              </Switch>
            </header>
          </div>
        </BrowserRouter>

      );

    }
  }

}

export default App;
