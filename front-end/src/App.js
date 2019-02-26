import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import authService from './services/authServices';
import Home from './routes/home';
import SignUp from './routes/signup'
import LogIn from './routes/login'
import Profile from './routes/profile'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
    this.service = new authService()
    this.getUser()
  }
  getUser = () => {
    this.service.getLoggedin()
    .then(data => this.setState({...this.state, user: data }))
  }
  render() {
    const logged = this.state.user ? <Profile /> : <Redirect to="/" />
    /* const logged = this.state.user ? Profile : Home */
    console.log(logged)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          {/* <Route path="/profile" render={()=> {return  logged} } /> */}
          {/* <Route path="/profile" component={logged} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
