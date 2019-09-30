import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './Router'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker'
import MyProvider from './context'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <MyProvider>
    <Router />
  </MyProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
