import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';
import AuthService from './components/AuthService';

import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';

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
      },
      message: '',
      loggedInUser: null
    }

    this.service = new AuthService()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
  }

  checkLogin() {
    if (this.state.loggedInUser === null)
    this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        })
      }
      )
      .catch(error => {
        // console.log(error.response.data.message)
        this.setState({
          loggedInUser: false,
          // message: error.response.data.message
        })
      })
  }

  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  handleInputChange(e, type){
    let { name, value } = e.target;
    // console.log(name, value) <== OK
    let typeState = this.state[type];
    typeState[name] = value;
    this.setState({ 
      [type]: typeState
    })
  }

  handleSubmit(e, type) {
    e.preventDefault()

    type === 'signup'
      ? this.service
          .signup(this.state.signup)
          .then(response => {
            this.setState({ 
              signup: {
                username:"",
                password:"",
                campus:"",
                course:""
              } 
            });
            this.props.history.location.push('/profile')
          })
          .catch(error => {
            console.log(error);
            this.setState({ message: 'Something went wrong' });
          })
      : this.service
          .login(this.state.login)
          .then(response => {
            const login = { 
              username: response.username,
              password: response.password,
            }
          
            this.setState({ login });
          })
          .catch(error => console.log(error))
  }

  

  render(){
    return (
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route 
              exact path="/login" 
              render={(props) => 
                <Login {...props} 
                handleInputChange={this.handleInputChange} 
                handleSubmit={this.handleSubmit} 
                {...this.state.login}/>}    
            />
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