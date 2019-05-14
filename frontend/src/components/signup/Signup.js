import React, { Component } from 'react'
import WrappedRegistrationForm from './SignupForm'

class Signup extends Component {
    render() {
        return (
            <div style={{width: '50vw'}}>
            <WrappedRegistrationForm />
            </div>
        )
    }
}

export default Signup