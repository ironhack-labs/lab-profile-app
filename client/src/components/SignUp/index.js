import React from 'react';
import { MyContext } from '../../context'
import { StyledSignup, StyledCard } from '../styled-components.js/components';


export default function SingUpContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyledCard>
          <h1>Sign up</h1>
          <div className="container">
            <StyledSignup 
              onSubmit={e => {
                context.handleSignup(e)
                props.history.push('/login')
              }}
            >

              <label htmlFor="email">Email</label>
              <input 
                  name="email"
                  type="Email" 
                  value={context.formSignup.email}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />

              <label htmlFor="password">Password</label>
              <input 
                  name="password"
                  type="Password" 
                  value={context.formSignup.password}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />

              <label htmlFor="campus">Campus</label>
              <input 
                  name="campus"
                  type="text" 
                  value={context.formSignup.campus}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />

              <label htmlFor="course">Course</label>
              <input 
                  name="course"
                  type="text" 
                  value={context.formSignup.course}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              <button htmlType="submit">Create the Account</button>
            </StyledSignup>
            <div className="right">
              <h2>Hello!!</h2>
              <h3>Welcome to IronProfile!</h3>
              <small>If you signup, you agree wuth all our terms and conditions  where we can do whatever we want with the data!</small>
            </div>
          </div>
        </StyledCard>
      )}
    </MyContext.Consumer>
  )
}