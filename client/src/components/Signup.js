import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import AuthService from '../services/authService'

export default class Signup extends Component {
    state = {
        username: '',
        password: '',
        campus: '',
        course: ''
      }
   
      service = new AuthService()



      handleFormSubmit = e => {
        e.preventDefault()
        this.service.signup(this.state.username, this.state.password,this.state.campus,this.state.course)
        .then(response => {
          console.log(response)
          this.setState({
            username: '',
            password: '',
            campus: '',
            course: ''
          })
        })
        .catch(err => {
          console.log(err)
        })
     }
   
     handleChange = e => {
       const { name, value } = e.target
       this.setState({
         [name]: value
       })
     }
   
    render() {
        return (
            <div>
                 <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    <label>Campus</label>
                    <select name="campus" defaultValue='' onChange={this.handleChange}>
                        <option value="" disabled></option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona" defaultValue>Barcelona</option>
                        <option value="Miami">Miami</option>
                        <option value="Paris">Paris</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="México">México</option>
                        <option value="Sao Paulo">Sao Paulo</option>
                        <option value="Lisbon">Lisbon</option>
                    </select>
                    <label>Course</label>
                    <select name="course" defaultValue='' onChange={this.handleChange}>
                        <option value="" disabled></option>
                        <option value="Web Dev" defaultValue>Web Dev</option>
                        <option value="UX/UI">UX/UI</option>
                        <option value="Data Analytics">Data Analytics</option>
                    </select>
                    <input type="submit" value="Create account" />
                </form>
                <p>Already have account?
                <Link to={"/"}> Login</Link>
                </p> 
            </div>
        )
    }
}
