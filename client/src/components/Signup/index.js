import React from 'react';
import { MyContext  } from '../../context';
import { StyledSignupForm } from '../styled-components/components';

export default function SignupContainer(props) {
  return(
    <MyContext.Consumer>
    {context => (
      <>
      
      <StyledSignupForm onSubmit={e => {
        context.handleSignup(e)
        props.history.push('/login')
      }}>

        <div>
        <h1> Sig up</h1>
        <label htmlFor="email">Email</label>
          <br/>
          <input
              value={context.formSignup.email}
              type="Email"
              placeholder="Email"
              name="email"
              onChange={e => context.handleInput(e, 'formSignup')}
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
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            <br/>
          <label htmlFor="text">Campus</label>
          <br/>
          <input
              value={context.formSignup.campus}
              type="text"
              placeholder="Campus"
              name="campus"
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          <br/>
          <label htmlFor="password">Course</label>
          <br/>
          <input
              value={context.formSignup.course}
              type="text"
              placeholder="Course"
              name="course"
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          <br/>
          <button type="primary" htmlType="submit">
              Create the Account
            </button>

          

        </div>

      

            <div>
        <h1>Hello!!</h1>
        <h2> Welcome to IronProfile</h2>


        <small> If you signup, you agree with all our
        terms and conditions where we onChange
        do whatever we want with the data!</small>
      </div>
    </StyledSignupForm>
      

      </>


    )}
    </MyContext.Consumer>   
  )
}