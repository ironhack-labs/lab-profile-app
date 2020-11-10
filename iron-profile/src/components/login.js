import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthService from '../authService/authService'

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    redirect: false 
  }

  service = new AuthService()

  onChangeHandler = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.service.login(this.state.username, this.state.password)
    .then(user => {
      console.log(user)
      this.setState({
        redirect: true 
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  render() {
    if(this.state.redirect){
      return <Redirect to="/profile"></Redirect>
    }
    
    return(
      <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChangeHandler}></input>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangeHandler}></input>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;