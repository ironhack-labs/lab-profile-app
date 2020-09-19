import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from "./router"; 
import OurProvider from "./context"

function App() {
    return ( 
    <OurProvider>
      <Router />
    </OurProvider>
    )
}

export default App;