import React, { Component } from 'react';
import { auth } from '../../authService';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.campus  = [`Madrid`, `Barcelona`, `Miami`, `Paris`, `Berlin`, `Amsterdam`, `Mexico`, `Sao Paulo`];
    this.courses = [`WebDev`, `UX/UI`, `Data Analytics`];
    this.state = {
      user: {
        username: ``,
        password: ``,
        campus:   this.campus[0],
        course:   this.courses[0]
      }
    }
  }

  changeHandler = e => {
    let {user} = this.state,
        field  = e.target.name;

    user[field] = e.target.value;

    this.setState({user});
  }

  submitHandler = e => {
    e.preventDefault();

    let {user} = this.state,
        {match, history} = this.props;

    auth(user, match, history);
  }

  render() {
    const { campus, courses } = this,
          { path } = this.props.match;

    return (
      <form className="auth page" onSubmit = { this.submitHandler }>
        <div className={ path === `/login` ? `left-panel login` : `left-panel` }>
          { path === `/login`
            ? <h1>Log in</h1>
            : <h1>Sign up</h1>
          }
          <div>
            <FormInput
              name     = "username"
              holder   = "ironhacker01"
              onChange = { this.changeHandler }
            >Username</FormInput>
            { path === `/login`
              ? null
              : <div>
                  <FormSelect
                    name     = "campus"
                    value    = { campus }
                    onChange = { this.changeHandler }
                  >Campus</FormSelect>
                  <FormSelect
                    name     = "course"
                    value    = { courses }
                    onChange = { this.changeHandler }
                  >Course</FormSelect>
                </div>
            }
            <FormInput
              password
              name     = "password"
              holder   = "••••••••"
              onChange = { this.changeHandler }
            >Password</FormInput>
            { path === `/login`
              ? <p className="no-account">If you don't have an account yet, you can create one <Link to="/signup">here</Link>.</p>
              : null
            }
          </div>
        </div>
        <div className="right-panel">
          <div>
            <h2>Hello!!</h2>
            { path === `/login`
              ? <h3>Awesome to have you at IronProfile again!</h3>
              : <h3>Welcome to IronProfile!</h3>
            }
          </div>
          <div>
            <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
            <FormInput
              submit
              path = { path }
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Auth;