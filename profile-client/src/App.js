import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
