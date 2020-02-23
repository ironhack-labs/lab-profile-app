import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronProfile</h1>
        <br></br>
        <h3>Today we will create an app with authoritation, adding some cool styles!</h3>
        <a
        className="App-link"
          href="/login"
        >
          Login
        </a>
        <a
        className="App-link"
          href="/signup"
        >
          Sign up
        </a>
      </header>
    </div>
  );
}

export default App;
