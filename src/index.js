import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyProvider from './context';


ReactDOM.render(
<MyProvider>
  <App />
</MyProvider>
, document.getElementById('root'));

serviceWorker.unregister();
