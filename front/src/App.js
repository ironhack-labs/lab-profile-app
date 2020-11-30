import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Card from './components/Card'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'

function RouterApp() {
  return (
    <Router>
      <Card></Card>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />  
          <Route path="/profile" component={Profile} />  
      </Switch>
    </Router>
  );
}

export default RouterApp;
