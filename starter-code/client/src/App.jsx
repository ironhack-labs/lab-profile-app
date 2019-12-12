import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Views/Home";
import Login from './Views/authentication/Login';
import Signup from './Views/authentication/Signup';
import Private from './Views/Private';
import Error from './Views/Error';
import Navbar from './Components/Navbar';
//import Navbar from './Components/Navbar';
import EditProfile from './Views/authentication/EditProfile';

import { loadUserInformation as loadUserInformationService } from './Services/authentication';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false
    };
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(this);
    this.loadUserInformation=this.loadUserInformation.bind(this);
  }

  changeAuthenticationStatus(user) {
    this.setState({
      user: user
    });
  }

  async loadUserInformation() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user,
        loaded: true
      });
    } catch (error) {
      console.log('couldnt load user information in App.jsx due to', error);
    }
  }

  async componentDidMount() {
    this.loadUserInformation();
  }

  render() {
    const user = this.state.user;
    console.log('user', user);
    console.log('loaded?', this.state.loaded)
    return (
      <div className="app">
        <BrowserRouter>
        <Navbar
            user={this.state.user}
            changeAuthenticationStatus={this.changeAuthenticationStatus}
          />
       <Route path="/error/:errorCode" component={Error} /> 
       {this.state.loaded && 
       <Fragment>
       {!user && (
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} changeAuthenticationStatus={this.changeAuthenticationStatus} loadUserInformation={this.loadUserInformation}/>}/>
          <Route path="/signup" render={(props) => <Signup {...props} changeAuthenticationStatus={this.changeAuthenticationStatus} loadUserInformation={this.loadUserInformation} />} />
          <Route path="/" exact component={Home} />
          <Redirect from="/private" exact to='/' />
          <Redirect to="/error/404" />
          </Switch>  
       )}
          {user && 
          <Switch>
           <Route path="/edit-profile" render={(props) => <EditProfile {...props} user={this.state.user} loadUserInformation={this.loadUserInformation} changeAuthenticationStatus={this.changeAuthenticationStatus} />}/>
           <Route path="/private" render={(props) => <Private {...props} user={this.state.user} loadUserInformation={this.loadUserInformation}/>} />
           <Redirect to="/error/404" />
           </Switch>
          }
          </Fragment>
       }
        </BrowserRouter>
      </div>
    );
  }
}

//need to add a redirect when page is not found. Example, /private when not logged in, or error page?

export default App;
