import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../authService/authService'

export default class Signup extends Component {

    state = {
        username: '',
        password: '',
        campus:'',
        course:''
      }
    
      service = new AuthService()

      handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.service.signup(this.state.username, this.state.password, this.state.campus, this.state.course)
        .then(response => {

          console.log(response)
          this.setState({
            username: '',
            password: '',
            campus: '',
            course:''
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
            <div className='signup-form'>
            <h1>Signup</h1>
            <form onSubmit={this.handleFormSubmit}>
              <label>Username</label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
    
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

              <label>Campus</label>
              <input type="text" name="campus" value={this.state.campus} onChange={this.handleChange}/>

              <label>Course</label>
              <input type="text" name="course" value={this.state.course} onChange={this.handleChange}/>
              
              <button>Signup</button>
            </form>
          </div>
        )
    }
}




  
