import React from 'react';
import { MyContext  } from '../../context';
import { StyledSignupForm } from '../styled-components/components';
import { Link } from  'react-router-dom';


export default class LoginContainer extends React.Component {
    componentDidMount() {
      console.log(this.context)
      if (this.context.loggedUser) {
        console.log(';lol')
        return this.props.history.push('/profile')
      }
    }
  
    render() {
      return(
        <MyContext.Consumer>
        {context => (
          <>
          <h1> Log In</h1>
          <StyledSignupForm onSubmit={e => {
            context.handleLogin(e)
            this.props.history.push('/login')
          }}>
      
            <label htmlFor="email">Email</label>
              <br/>
              <input
                  value={context.loginForm.email}
                  type="Email"
                  placeholder="Email"
                  name="email"
                  onChange={e => context.handleInput(e, 'loginForm')}
                />
              <br/>
              <br/>
              <label htmlFor="password">Password</label>
              <br/>
              <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={context.formSignup.password}
                  onChange={e => context.handleInput(e, 'loginForm')}
                />
                <br/>
              <br/>
              <button type="primary" htmlType="submit">
                  Login
                </button>

            <p>if you dont have a account yet, you can create your account <Link to="/signup">here</Link></p>

        </StyledSignupForm>
          <div>
            <h1>Hello!!</h1>
            <h2> Awesome to have at IronProfile again!</h2>
    
    
            <small> If you signup, you agree with all our
            terms and conditions where we onChange
            do whatever we want with the data!</small>
          </div>
    
          </>
    
    
        )}
        </MyContext.Consumer>
      )
    }
  }
  
  LoginContainer.contextType = MyContext