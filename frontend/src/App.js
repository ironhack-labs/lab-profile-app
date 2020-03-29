import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './assets/css/styles.css';

// Components
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

// HOCs
import { withAuth } from './components/withAuthHOC';

export const App = withAuth(() => (
    <Router>
        <Layout>
            <Switch>
                <Route path="/" exact component={() => <HomePage />} />
                <Route path="/profile" component={() => <ProfilePage />} />
                <Route path="/login" component={() => <LoginPage />} />
                <Route path="/signup" component={() => <SignupPage />} />
            </Switch>
        </Layout>
    </Router>
));