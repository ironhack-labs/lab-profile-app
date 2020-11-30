import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
