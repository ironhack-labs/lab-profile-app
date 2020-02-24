import React, { Component } from 'react'
import AUTH_SERVICE from '../services/authServices'

export default class signup extends Component {
    state={
        username:"",
        password:"",
        campus:"",
        course:""
    }
    handleInput = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
      }
    
    handleSubmit = e => {
        e.preventDefault()
        const {username, password,campus,course } = this.state
        AUTH_SERVICE.signup({ username, password,campus,course})
          .then(({ data }) => {
            this.setState({username: '',
                campus: '',
                password: '',
                course:""
              })
            alert('Usuario Creado.')
            this.props.history.push('/login')
          })
          .catch(() => {
            alert('No se pudeo crear el usuario.')
          })
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="Form-izquierda">
                        <h1>Signup</h1>
                        <br/>
                        <br/>
                        <label>Username</label>
                        <br/>
                        <input type="text" onChange={this.handleInput} name="username" value={this.state.username} />
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="password" onChange={this.handleInput} name="password" value={this.state.password} />
                        <br/>
                        <label>Campus</label>
                        <br/>
                        <input type="text" onChange={this.handleInput} name="campus" value={this.state.campus} />
                        <br/>
                        <label>Course</label>
                        <br/>
                        <input type="text" onChange={this.handleInput} name="course" value={this.state.course} />
                        <br/>
                    </div>
                    <div className="Form-derecha">
                        <h2>Hello!!</h2>
                        <h2>Welcome to IronProfile!</h2>
                        <small>If you signup, you agree with all our terms and conditions where we can do what ever we want with the data!</small>
                        <br/>
                        <input type="submit" value="Create the Account"/>
                    </div>
                </form>
            </div>
        )
    }
}

