import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// We import BrowserRouter to allow the user to navigate within the app by setting defined routes. See ./Router.js for more information
import { BrowserRouter } from 'react-router-dom';
// We import the Provider which will allow us to pass down the state variables and functions to its descendants
import { AppProvider } from './AppContext';

// The "order" would be:
// 1. We provide the state variables and functions to all our app and routes
// 2. We set the router functionality of BrowserRouter to all our app
// 3. We have our app
const WithProviderAndRouter = () => (
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);

ReactDOM.render(<WithProviderAndRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
