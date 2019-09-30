import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AUTH_SERVICE from './../services/auth'

class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }

  componentDidMount = () => {
    if (localStorage.user) return this.props.history.push('/profile')
  }

  handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value

    this.setState((prevState) => {
      const {user} = prevState;

      user[key] = value;

      return { user }
    })
  }

  onSubmit = async (e) => {
    const {data: user} = await AUTH_SERVICE.login(this.state.user)
    localStorage.user = JSON.stringify(user);
    this.props.history.push('/profile')
  }

  render() {
    const { username, password} = this.state.user
    return (
      <div className="container">
        <div className="card">
          <div className="left-side">
            <h2>Log in</h2>
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" value={username} onChange={this.handleInput} />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={this.handleInput} />
            </form>
            <p>If you don't have an account yet, you can create one <Link to="/signup">here</Link>.</p>
          </div>
          <div className="right-side">
            <div>
              <h3>Hello!!</h3>
              <h4>Awesome to have you at IronProfile again!</h4>
            </div>
            <div>
              <p> If you sign up, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
              <button onClick={this.onSubmit}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login