import React, { Component } from 'react'
import AUTH_SERVICE from '../services/authServices'

export default class login extends Component {
    state={
        username:"",
        password:""
    }
    handleInput = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
      }
    
    handleSubmit = e => {
        e.preventDefault()
        const {username, password} = this.state
        AUTH_SERVICE.login({ username, password})
          .then(({ data }) => {
            this.setState({name: '',
                email: '',
                password: ''
              })
            alert('Usuario loggeado')
              this.props.history.push('/profile')
          })
          .catch((err) => {
            alert(err)
          })
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="Form-izquierda">
                        <h1>Login</h1>
                        <br/>
                        <br/>
                        <label>Username</label>
                        <br/>
                        <input type="text" onChange={this.handleInput} name="username" value={this.state.username} />
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="text" onChange={this.handleInput} name="password" value={this.state.password} />
                        <br/>
                        <br/>
                        <small>If you don't have an account yet, you can create  your account <a href="/signup">here</a></small>
                    </div>
                    <div className="Form-derecha">
                        <h2>Hello!!</h2>
                        <h2>Awesome to have at IronProfile again!</h2>
                        <small>If you signup, you agree with all our terms and conditions where we can do what ever we want with the data!</small>
                        <br/>
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        )
    }
}

