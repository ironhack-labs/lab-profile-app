import React, { Component } from 'react';
import { signup } from '../services/authService';

export class Signup extends Component {
  state = {
    username: '',
    password: '',
    campus: '',
    course: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (e, setUser) => {
    e.preventDefault();
    // Esperamos a que el registro se haga en la base de datos
    await signup(this.state);
    // una vez terminamos, redirigimos a login para que la persona haga login
    this.props.history.push('/login');
  };

  render() {
    return (
      <>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="username"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="password"
          />
          <br />
          <input
            type="text"
            name="campus"
            id="campus"
            value={this.state.campus}
            onChange={this.handleInputChange}
            placeholder="campus"
          />
          <br />
          <input
            type="text"
            name="course"
            id="course"
            value={this.state.course}
            onChange={this.handleInputChange}
            placeholder="course"
          />
          <br />
          <input type="submit" value="Signup" />
        </form>
      </>
    );
  }
}
export default Signup;
