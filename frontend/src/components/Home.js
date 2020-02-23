import React, { Component } from 'react'
import {signupForm, loginForm, upload, editUser} from '../servies'
import Login from './Login'
import Signup from './signup'
import Edit from './Edit'


export default class Home extends Component {
    state = {
        loginForm: {
            email: '',
            password: ''
        },
        signupForm: {
            email: '',
            password: '',
            course: '',
            campus: '',
            image: ''
        },
        user: {
            email: '',
            password: '',
            course: '',
            campus: '',
            image: ''
        },
        editForm: {
            email: '',
            password: '',
            course: '',
            campus: '',
            image: ''
        }

    }

    handleLoginInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          loginForm: {
            ...prevState.loginForm,
            [name]: value
          }
        }))
    }

    handleSignupInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          signupForm: {
            ...prevState.signupForm,
            [name]: value
          }
        }))
    }

    handleEditInput = e => {
      const { name, value } = e.target
      this.setState(prevState => ({
        ...prevState,
        signupForm: {
          ...prevState.editForm,
          [name]: value
        }
      }))
    }

    signup = async (e) => {
        e.preventDefault()
        const {email, password, course, campus, image} = this.state
        let user = await signupForm({email, password, course, campus, image})
        this.setState(user)
    }

    login = async (e) => {
        e.preventDefault()
        const {email, password} = this.state
        let logged = await loginForm({email, password})
        this.setState(logged)
    }

    handleFile = async (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        let image =  await upload(formData)
        this.setState({ image })
    }

    edit = async (e) => {
        e.preventDefault()
        const {email, course, campus, image} = this.state
        await editUser({email, course, campus, image})
        this.setState(email, course, campus, image)
    }

    render() {
        console.log(this.state)
        return (
            <div className="main">
            <Login handle={this.handleLoginInput} inputs={this.state.loginForm}/>
            <Signup handle={this.handleSignupInput} file={this.handleFile} inputs={this.state.signupForm}/>
            <Edit handle={this.handleSignupInput} file={this.handleFile} inputs={this.state.editForm}/>
            </div>
        )
    }
}
