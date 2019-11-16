import React from 'react';
import Router from './Router'
import './App.css';
import 'bulma/css/bulma.css';
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <Nav />
      <Router />
    </div>
  );
}

export default App;
