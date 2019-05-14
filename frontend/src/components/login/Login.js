import React, { Component } from 'react'
import  WrappedNormalLoginForm from './LoginForm'

class Login extends Component {
    render() {
        return (
            <div style={{width: '50vw'}}>
            < WrappedNormalLoginForm  handleInputs={this.handleInputs} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default Login