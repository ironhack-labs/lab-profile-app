import React, { Component } from 'react';
import  authService from '../../services/authService'

export default class Signup extends Component {
constructor(props){
    super(props);
    this.state = { 
        username: '',
        password: '',
        campus: '',
        course: ''
    }
}
handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    }
handleFormSubmit = (event) => {
    event.preventDefault();
    authService.signup(this.state)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        })
    })
    .catch( error => console.log(error) )
}


render(){
    return(
        <div className="Signup">
             <form onSubmit={this.handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.userName} onChange={ e => this.handleChange(e)}/>
                <label>Password:</label>
                <input type="text" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
                <label>Campus:</label>
                <input type="text" name="campus" checked={this.state.campus} onChange={ e => this.handleChange(e)}/>
                <label>Course:</label>
                <input type="text" name="course" value={this.state.course} onChange={ e => this.handleChange(e)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )       
}}