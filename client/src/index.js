import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./router"
import OurContext from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (<OurContext>
    <Router />
  </OurContext>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
