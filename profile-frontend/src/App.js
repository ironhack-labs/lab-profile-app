import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Routes from './Routes';
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div className="App">
      

        <div className="home-container">

        <Routes />



        </div>
      </div>
    );
  }
}

export default App;
