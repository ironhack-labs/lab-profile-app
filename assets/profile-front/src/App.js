import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import Signup from './components/Signup';
import Loggedin from './components/Loggedin';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
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

  fetchUser(){
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
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
        <loggedin></loggedin>

      
          {/* <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Contents></Contents>
          </header> */}
        </div>
      );
    } else {
      return (
        <div className="App">
        <Signup></Signup>
          {/* <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header> */}
        </div>
      );
    }
  }
}

export default App;

