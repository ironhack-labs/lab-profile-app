import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';

class Signup extends Component {
  state = {
    user: {
      campus: '',
      course: ''
    }
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {course, campus} = this.state.user
    return (
      <div className="columns is-centered">
        <div className="column box ironBox is-10">
          <div className="columns">
            <div className="column is-7">
              <form className="" onSubmit={this.onSubmit}>
                <h1 className="title is-2">Sign up</h1>

                <div className="field">
                  <label className="label">Name:</label>
                  <input className="input" onChange={this.handleInput} type="text" name="username" />
                </div>

                <div className="field">
                  <label className="label">Password:</label>
                  <input className="input" onChange={this.handleInput} type="password" name="password" />
                </div>

                <div className="field">
                  <label className="label">Course:</label>
                  <div className="select">
                    <select name="course" value={course} onChange={this.handleInput} >
                      <option disabled ></option>
                      <option value="WebDev">WebDev</option>
                      <option value="UX/UI">UX/UI</option>
                      <option value="Data Analytics">Data Analytics</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Campus:</label>
                  <div className="select">
                    <select name="campus" value={campus} onChange={this.handleInput}>
                      <option disabled ></option>
                      <option value="Madrid">Madrid</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Miami">Miami</option>
                      <option value="Paris">Paris</option>
                      <option value="Berlin">Berlin</option>
                      <option value="Amsterdam">Amsterdam</option>
                      <option value="México">México</option>
                      <option value="Sao Paulo">Sao Paulo</option>
                    </select>
                  </div>
                </div>
                <input className="button" type="submit" value="Signup" />
              </form>
            </div>
            <div className="column">
                <h2 className="title is-4">Hello</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
