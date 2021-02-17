import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Login from './pages/Login'
import LoggedOutRoute from './components/LoggedOutRoute'
import PrivateRoute from './components/PrivateRoute'

// const Home = () => <h1>Home</h1>
// const Signup = () => <h1>Signup</h1>
// const Login = () => <h1>Login</h1>
// const Profile = () => <h1>Profile</h1>

function Router () {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <LoggedOutRoute component={Signup}  path="/signup" />
          <Route component={Login}  path="/login" />
          <PrivateRoute component={Profile}  path="/profile" />
        </Switch>
      </BrowserRouter>
    );
}

export default Router