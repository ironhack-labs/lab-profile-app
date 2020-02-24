import React, { Component } from 'react'
import Signup from '../components/signup/index'
import AUTH_SERVICE from '../services/index'

class signup extends Component {
    state={
        username: '',
        password: '',
        campus: '',
        course: ''
    }

    handleInputs = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
        console.log(this.state)
      };

    signup = e => {
        e.preventDefault()
        const {username, password, campus, course} = this.state
        AUTH_SERVICE.signup({username, password, campus, course})
            .then(({msg}) => {
                this.setState({
                    username: '',
                    password: '',
                    campus: 'Madrid',
                    course: 'WebDev'
                })
                alert(msg)
                this.props.history.push('/login')
            })
            .catch(() => {
                alert(':C - error')
            })
    }

    render() {
        return (
            <Signup
                handleInput = {this.handleInputs}
                signup = {this.signup}
                username = {this.state.username}
                password = {this.state.password}
                campus = {this.state.campus}
                course = {this.state.course}
            />
        )
    }
}

export default signup
