import React from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      campus: '',
      course: '',
      // image: ''
    }
    this.service = new AuthService();
  }


  handleFormSubmit = (e) => {
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
      })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <label htmlFor="campus">Campus</label>
          <input type="text" name="campus" value={this.state.campus} onChange={e => this.handleChange(e)} />

          <label htmlFor="course">Course</label>
          <input type="text" name="course" value={this.state.course} onChange={e => this.handleChange(e)} />

          {/* <label htmlFor="image" />
        <input type="file" name="image" value={this.state.image} /> */}

          <input type="submit" value="Sign up" />

        </form>
        <p>Already have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}
                // usernameHandler = (e) => {
                //   this.setState({
                //     ...this.state,
                //     username: e.target.value
                //   })
                // }

                // passwordHandler = (e) => {
                //   this.setState({
                //     ...this.state,
                //     password: e.target.value
                //   })
                // }

                // campusHandler = (e) => {
                //   this.setState({
                //     ...this.state,
                //     campus: e.target.value
                //   })
                // }

                // courseHandler = (e) => {
                //   this.setState({
                //     ...this.state,
                //     course: e.target.value
                //   })
                // }