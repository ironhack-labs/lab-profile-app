import React, { Component } from 'react';
import AuthService from './Auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', campus: 'Madrid', course: 'WebDev' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const profile = {username: this.state.username, password: this.state.password, campus: this.state.campus, course: this.state.course}

    this.service
      .signup(profile)
      .then((response) => {
        this.setState({
          username: '',
          password: '',
          campus: '',
          course: '',
        });
        this.props.getUser(response)
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });

    console.log(this.state)
  };

  render() {
    return (
      <div>
        <h1>IronProfile</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Password:</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          
          <select name="campus" onChange={(e) => this.handleChange(e)}>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Mexico">Mexico</option>
            <option value="Sao Paulo">Sao Paulo</option>
          </select>

          <select name="course" onChange={(e) => this.handleChange(e)}>
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <input type="submit" value="Create the account" />
        </form>

        <p>
          Already have account?
          <Link to={'/login'}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
