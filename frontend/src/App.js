import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';
import AuthService from './components/AuthService';

import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import axios from 'axios';

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
      image: '',
      message: '',
      loggedInUser: null
    }

    this.service = new AuthService()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
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
        this.setState({
          loggedInUser: false,
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
    let typeState = this.state[type];
    typeState[name] = value;
    this.setState({ 
      [type]: typeState
    })
  }

  handleSubmit(e, type, history) {
    e.preventDefault()

    type === 'signup'
      ? this.service
          .signup(this.state.signup)
          .then(user => {
            this.setState({ 
              signup: {
                username:"",
                password:"",
                campus:"",
                course:""
              },
              loggedInUser: user
            });

            history.push('/profile')
          })
          .catch(error => {
            console.log(error);
            this.setState({ message: 'Something went wrong' });
          })
      : this.service
          .login(this.state.login)
          .then(user => {
            this.setState({ 
              login: {
                username:"",
                password:""
              }, 
              loggedInUser: user,
              image: user.image
            });
            console.log(this.props)
            history.push('/profile')
          })
          .catch(error => console.log(error))
  }

  
  handleFileChange(e) {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);

    const { _id } = this.state.loggedInUser

    axios
      .patch(`http://localhost:5000/auth/upload/${_id}`, uploadData)
      .then((response) =>
        this.setState({
          image: response.data.secure_url,
        })
      )
      .catch((error) => console.log(error));
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
            <Route 
              exact path="/signup" 
              render={(props) => 
                <Signup {...props} 
                handleInputChange={this.handleInputChange} 
                handleSubmit={this.handleSubmit} 
                {...this.state.signup}/>}    
            />
            <ProtectedRoute 
              user={this.state.loggedInUser}
              handleFileChange={this.handleFileChange}
              image={this.state.image}
              exact path="/profile"
              component={Profile}
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