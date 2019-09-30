import React from 'react'
import styled from 'styled-components'
import background from '../../images/oval-bg.png'


//es .div porque la etiqueta que va a usar es .div 
const LoginBack = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

const LoginForm = ( ) => {
  return(
    <LoginBack>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" name="username" type="text" placeholder="Username"/>
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password"/>
          <span className="icon is-small is-left">
            <i className="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success">
            Login
          </button>
        </p>
      </div>
    </LoginBack>
  )
}

export default LoginForm;