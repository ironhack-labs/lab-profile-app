import React, { Component } from 'react'
import WrappedNormalSignupForm from './SignupForm'

class Signup extends Component {
  render() {
    return (
      <div style={{ width: '50vw', paddingTop: '5%', paddingBottom: '100vh' }}>
        <WrappedNormalSignupForm />
      </div>
    )
  }
}

export default Signup