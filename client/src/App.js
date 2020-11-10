import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import {Route, Switch} from 'react-router-dom'
import AuthService from './services/authService';

class App extends React.Component {

  state = {
    loggedInUser: null
  }
  
  service = new AuthService()

  componentDidMount(){
    this.service.loggedin()
    .then(user => {
      this.setState({
        loggedInUser: user
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  getTheUser = user => {
    this.setState({
      loggedInUser: user
    })
  }

  render() {
    return(
      <div className="App">
        <Navbar getTheUser={this.getTheUser}/>
        <div>
          {this.state.loggedInUser && (
            <div>
            {`Hello ${this.state.loggedInUser.username}, welcome back!`}
            <img src={`http://localhost:5000/uploads/${this.state.loggedInUser.imageUrl}`} alt=""></img>
          </div>
          )}
          <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={() => <Login getTheUser={this.getTheUser}/>}/>
          <Route exact path="/upload" component={Profile} />
          </Switch>
        </div>
      </div>
    )
  }

}

export default App;
