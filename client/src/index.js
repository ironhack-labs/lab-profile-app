import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router' // <- se agrega la de Roputer que se creo
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom' //<- Se agrega

ReactDOM.render(<BrowserRouter><Router/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
