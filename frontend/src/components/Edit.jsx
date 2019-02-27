import React, { Component } from 'react'
import AuthService from "./auth/service"

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', campus: '', course: '' };
    this.service = new AuthService();
  }

  componentWillMount() {
    this.service.loggedin()
      .then(user => {
        this.setState({
          username: user.username,
          campus: user.campus,
          course: user.course
        })
      })
      .catch(error => console.log(error))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    e.preventDefault()

    const username = this.state.username;
    const course = this.state.course;
    const campus = this.state.campus;

    this.service.signup(username, campus, course)
      .then(response => {
        this.setState({
          username: '',
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
        <h1>Edit your user</h1>
        <div className="left-column">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
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
          <p>Here you can edit your profile!</p>
          <button onClick={this.handleSubmit}>Create the account</button>


        </div>
      </div>
    )
  }
}


export default Edit
