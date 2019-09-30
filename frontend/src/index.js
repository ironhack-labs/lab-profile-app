import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import './index.css';
// import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import MyProvider from './context/index';


ReactDOM.render(
<MyProvider>
  <Router />
</MyProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
