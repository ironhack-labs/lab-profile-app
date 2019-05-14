import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/auth/Profile';
import AuthService from './components/auth/auth-service';


class App extends Component{
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  setTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
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

  render(){
    this.fetchUser()
    if(this.state.loggedInUser){
      <Profile setUser={this.setTheUser}/>
    } else {  
      return (
        <div className="App">
          <h1>Iron n sei das quantas</h1>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Paisis, filhis, espiritis santis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. </p>
          
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Switch>
            <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setTheUser}/>} />
            <Route exact path="/signup" render={(props) => <Signup {...props} setUser={this.setTheUser}/>} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
