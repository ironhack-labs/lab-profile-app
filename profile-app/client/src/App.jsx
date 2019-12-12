
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AuthenticationSignInView from './views/authentication/SignInView';
import AuthenticationSignUpView from './views/authentication/SignUpView';
import AuthenticationPrivateView from './views/authentication/PrivateView';
import HomeView from './views/home';
import EditImageView from './views/edit-image';

import { signOut as signOutService } from './services/authentication';
import { loadUserInformation as loadUserInformationService } from './services/authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onSignOutTrigger = this.onSignOutTrigger.bind(this);
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  async onSignOutTrigger() {
    try {
      await signOutService();
      this.setState({
        user: null
      });
    } catch (error) {
      console.log(error);
    }
  }

render () {
  return (
    <div className="App">
    <BrowserRouter>
    <nav class = "nav">
    <Link to="/sign-in">Sign In</Link>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/private">Profile</Link>
    <button onClick={this.onSignOutTrigger}>Sign Out</button>
    </nav>
    <Switch>
    
    <Route path="/sign-up" component={AuthenticationSignUpView} />
    <Route path="/sign-in" component={AuthenticationSignInView} />
    <Route path="/private" component={AuthenticationPrivateView} />
    <Route path="/:id/edit-image" component={EditImageView} />
    <Route path="/" exact component={HomeView} />
    </Switch>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
