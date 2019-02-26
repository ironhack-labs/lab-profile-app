import React, { Component } from 'react';
import Signup from './signup/Signup'
import { Link,Switch,Route } from 'react-router-dom';
import Home from './home/Home'
import Login from './login/Login'
import Profile from './profile/Profile'
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { loggedInUser: null };
  }
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path={"/signup"} component={Signup}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/profile"} component={Profile}/>
      </Switch>
      </div>

 
    );
  }
}

export default App;
