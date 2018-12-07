import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import { Link, Switch, Route} from "react-router-dom";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
{/* componentes que quiero que siempre se mantengan fijos, como nav lo  pondría fuera de Switch */}
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/signup" component={Signup}/>
         <Route path="/login" component={Login}/>
       </Switch>
       
      </div>
    );
  }
}

export default App;
