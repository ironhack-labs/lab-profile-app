import React, { Component } from 'react'
import AUTH_SERVICE from './../services/auth'

export default class Signup extends Component {
  state = {
    user: {
      username: '',
      password: '',
      campus: 'Mexico',
      course: 'Web Development'
    },
    action: 'Sign up'
  }

  componentDidMount = () => {
    if(this.props.match.path === '/signup' && localStorage.user) this.props.history.push('/profile')
    if (localStorage.user) this.setState({ user: JSON.parse(localStorage.user), action: 'Update' })
  }

  handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value

    this.setState(prevState => {
      const {user} = prevState;

      user[key] = value

      return { user }
    })
  }

  onSubmit = async (e) => {
    if (this.state.action === 'Sign up') {
      await AUTH_SERVICE.signup(this.state.user)
    }
    else {
      const {data: user} = await AUTH_SERVICE.editUser(this.state.user)
      localStorage.user = JSON.stringify(user)
    }
    this.props.history.push('/login')
  }

  render() {
    const { username, password, campus, course } = this.state.user
    const { action } = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="left-side">
            <h2>{action}</h2>
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" value={username} onChange={this.handleInput} />
              {action === "Sign up" ? <label htmlFor="password">Password</label>: undefined}
              {action === "Sign up" ? <input type="password" name="password" id="password" value={password} onChange={this.handleInput} /> : undefined}
              <label htmlFor="campus">Campus</label>
              <select name="campus" id="campus" value={campus} onChange={this.handleInput}>
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Miami">Miami</option>
                <option value="Paris">Paris</option>
                <option value="Berlin">Berlin</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Mexico">Mexico</option>
                <option value="Sao Paulo">Sao Paulo</option>
              </select>
              <label htmlFor="course">Course</label>
              <select name="course" id="course" value={course} onChange={this.handleInput}>
                <option value="Web development">Web development</option>
                <option value="UX/UI">UX/UI</option>
                <option value="Data Analytics">Data Analytics</option>
              </select>
            </form>
          </div>
          <div className="right-side">
            <div>
              <h3>Hello!!</h3>
              {action === 'Sign up' ? 
              <h4>Welcome to IronProfile!!</h4> : <h4>Update your information</h4>}
            </div>
            <div>
              <p>{action === 'Sign up' ? 'If you sign up, you agree with all our terms and conditions where we can do whatever we want with the data. Also you give us all rights to your soul.' : 'Remember your soul is now ours.'}</p>
              <button onClick={this.onSubmit}>{action}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
