import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import LayoutApp from "./components/Layoutapp";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'

const Home = () => <h1>Home</h1>

const Router = () => {
  return (
    <BrowserRouter >
      <LayoutApp>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router