import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
//como lo importe en index.js, ya no es necesario importarlo en las demas pestañas
import Router from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
