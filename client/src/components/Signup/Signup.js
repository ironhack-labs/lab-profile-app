import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import AuthService from '../../services/authService'

export default class Signup extends Component {

    state = {
        username: '',
        password: '',
        campus: '',
        course: '',
        errorMessage: '',
        redirect: false
    }

    service = new AuthService()

    submitFormHandler = e => {
        e.preventDefault()
        this.service.signup(this.state.username, this.state.password, this.state.campus, this.state.course)
        .then(response => {
            console.log(response)
            this.setState({
                username: '',
                password: '',
                campus: '',
                course: '',
                redirect: true
            })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                errorMessage: err.response.data.message
            })
        })
    }

    changeHandler = e => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        console.log(this.state)
        if(this.state.redirect){
         return <Redirect to="/upload"></Redirect>
        }
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.submitFormHandler}>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                <label>Campus</label>
                <select onChange={this.changeHandler} name="campus" value={this.state.campus}>
                    <option>Select your campus</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Paris">Paris</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="México">México</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                    <option value="Lisbon">Lisbon</option>
                </select>
                <label>Course</label>
                <select onChange={this.changeHandler} name="course" value={this.state.course}>
                    <option>Select your course</option>
                    <option value="Web Dev">Web Dev</option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Data Analytics">Data Analytics</option>
                </select>
          <button>Signup</button>
          <p>Already have an account? 
            <Link to="/login">Login</Link>
          </p>
        </form>
        {this.state.errorMessage}
            </div>
        )
    }
}
