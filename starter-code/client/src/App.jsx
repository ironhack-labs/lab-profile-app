import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Views/Home";
import Login from './Views/authentication/Login';
import Signup from './Views/authentication/Signup';
import Private from './Views/Private';
import Navbar from './Components/Navbar';
import { loadUserInformation as loadUserInformationService } from './Services/authentication';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false
    }
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(this)
  }

  changeAuthenticationStatus(user) {
    this.setState({
      user
    });
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user,
        loaded: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div className="app">
        <BrowserRouter>
        <Navbar
            user={this.state.user}
            changeAuthenticationStatus={this.changeAuthenticationStatus}
          />
                  {this.state.loaded &&

        <Switch>
          <Route path="/login" render={(props) => <Login {...props} changeAuthenticationStatus={this.changeAuthenticationStatus} />}/>
          <Route path="/signup" render={(props) => <Signup {...props} changeAuthenticationStatus={this.changeAuthenticationStatus} />} />
          <Route path="/private" render={(props) => <Private {...props} user={this.state.user} />} />
          <Route path="/" component={Home} />
          </Switch> }        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
