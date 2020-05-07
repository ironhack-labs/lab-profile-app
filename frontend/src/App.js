import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';

import HomePage from './pages/HomePage/HomePage';
import HomePage from './pages/Login/Login';
import HomePage from './pages/Profile/Profile';
import HomePage from './pages/HomePage/HomePage';

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      
      login: {
        username:"",
        password:""
      },

      signup: {
        username:"",
        password:"",
        campus:"",
        course:""
      }
    }

    this.service = new AuthService()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e, type){
    let { name, value } = e.target;
    let inputName = this.state[type][name];
    this.setState({ 
      [inputName]: value 
     });
  }

  handleSubmit(e, type) {
    e.preventDefault()
    

  }

  render(){
    return (
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/signup" render={(props) => <HomePage {...props} />} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;

/**
 * HomePage precisa de dois botões:
 * 
 * Home Page ==> /signup
 *    ''     ==> /login
 * 
 * Criar authService:
 * 
 * Classe com métodos para chamar API:
 * 
 * /auth/signup
 * /auth/login
 * /auth/upload
 * /auth/edit
 * /auth/logout
 * /auth/loggedin
 */