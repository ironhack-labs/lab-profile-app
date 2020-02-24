import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth'

class Signup extends Component {
    state = {
        username: '',
        password: '',
        campus: '',
        course: ''
    }

    handleInputs = ({target: {name, value}}) => this.setState({[name]: value})

    handleSubmit = async () => {
        const response = await AUTH_SERVICE.signup(this.state)
        console.log(response)
    }

    render() {
        return (
            <>
                <h1>Signup</h1>
                <form>
                    <label>Username</label><br/>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleInputs} placeholder='username'/><br/>
                    <label>Password</label><br/>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputs} placeholder='*******'/><br/>
                    <label>Campus</label><br/>
                    <input type='text' name='campus' value={this.state.campus} onChange={this.handleInputs} placeholder='campus'/><br/>
                    <label>Course</label><br/>
                    <input type='text' name='course' value={this.state.course} onChange={this.handleInputs} placeholder='course'/>
                </form>
                <h2>Hello!!</h2>
                <p>Welcome to IronProfile!</p>
                <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                <button onClick={this.handleSubmit}>Create the Account</button>
            </>
        )
    }
}

export default Signup