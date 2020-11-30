import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/SignUp';
import Login from './pages/Login'
import Profile from './pages/Profile'


export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Signup} path="/signup" />
        <Route component={Login} path="/login" />
        <Route component={Profile} path="/profile" />
      </Switch>
    </Router>
  );
}
