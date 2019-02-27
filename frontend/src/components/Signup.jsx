import React, { Component } from 'react'
import AuthService from "./auth/service"

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', campus: '', course: '' };
    this.service = new AuthService();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    e.preventDefault()

    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campus;
    const course = this.state.course;

    this.service.signup(username, password, campus, course)
      .then(response => {
        this.setState({
          username: '',
          password: '',
          campus: '',
          course: ''
        })
        this.props.getUser(response.user)
      })
      .catch(error => console.log(error))

  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <div className="left-column">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
          <br />
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
          <br />
          <label htmlFor="campus">Campus</label>
          <input onChange={this.handleChange} type="campus" id="campus" name="campus" value={this.state.campus} />
          <br />
          <label htmlFor="course">Course</label>
          <input onChange={this.handleChange} type="course" id="course" name="course" value={this.state.course} />
          <br />
        </div>
        <div className="right-column">
          <h2>Hello!!</h2>
          <p>Welcome to IronProfile!</p>
          <p>If you signup, you agree with all our terms and conditions where we cand
            do whaterver we want with your data!</p>
          <button onClick={this.handleSubmit}>Create the account</button>


        </div>
      </div>
    )
  }
}


export default Signup