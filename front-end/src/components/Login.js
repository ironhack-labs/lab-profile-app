import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../services/authService'

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMessage: '',
        redirect: false
    }

    service = new AuthService()

    onChangeHandler = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log('inside submitHandler ')

        this.service.login(this.state.username, this.state.password)
        .then(user => {
            this.props.getTheUser(user)
            this.setState({
                redirect: true
            })
        })
        .catch(err => {
            console.log(err.response)
            this.setState({
                errorMessage: err.response.data.message
            })
        })
    }


    render() {

        if(this.state.redirect) {
            return <Redirect to='/profile'></Redirect>
        }

        return (
            <div className='card'>
                <div>
                    <h1>Log in</h1>
                    <form onSubmit={this.submitHandler}>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChangeHandler}></input>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangeHandler}></input>
                        <button>Login</button>
                    </form> 
        
                
                    {this.state.errorMsg}
                    <p>No account yet? <Link to="/signup">Signup</Link></p>
                </div>
            </div>
        )
    }
}
