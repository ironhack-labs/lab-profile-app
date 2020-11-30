import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import { AppCtxProvider } from './hooks/context'

ReactDOM.render(
  <React.StrictMode>
    <AppCtxProvider>
      <RouterApp />
    </AppCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
