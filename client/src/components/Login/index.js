import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context'
import { StyledSignup, StyledCard } from '../styled-components.js/components';

export default class LoginContainer extends React.Component {
  componentDidMount() {
    console.log(this.context)
    if (this.context.loggedUser) {
      console.log(';lol')
      return this.props.history.push('/profile')
    }
  }
  render () {
    return (
      <MyContext.Consumer>
        {context => (
          <StyledCard>
            <h1>Log in</h1>
            <div className="container">
            <StyledSignup
              onSubmit={e => {
              context.handleLogin(e, () => {
                this.props.history.push('/profile')
              })
            }}
            >
              <label htmlFor="email">Email</label>
              <br/>
              <input 
                  name="email"
                  type="Email" 
                  value={context.loginForm.email}
                  onChange={e => context.handleInput(e, 'loginForm')}
                />
              <br/>

              <label htmlFor="password">Password</label>
              <br/>
              <input 
                  name="password"
                  type="Password" 
                  value={context.loginForm.password}
                  onChange={e => context.handleInput(e, 'loginForm')}
                />
              <br/>

              <button htmlType="submit">Log in</button>
            <small>If you don't have an account yet, you can create your account. 
              <Link to="/signup">here</Link>
            </small>
            </StyledSignup>
            <div className="right">
              <h2>Hello!!</h2>
              <h3>Awesome to have you at IronProfile again!</h3>
              <small>If you signup, you agree wuth all our terms and conditions  where we can do whatever we want with the data!</small>
            </div>
            </div>
          </StyledCard>
        )}
      </MyContext.Consumer>
    )
    }

}