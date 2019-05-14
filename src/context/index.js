import React, { createContext, Component } from 'react'
import AuthService from '../services/Auth'
import toastr from 'toastr'

export const Mycontext = createContext()

const service = new AuthService()

export default class MyProvider extends Component{
  state = {
    form: {
      name: '',
      email: '',
      password: '',
      campus: '',
      course: ''
    }
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleSubmit = e => {
    service
      .signup(this.state.form)
      .then(response => {
        console.log(response)
        toastr.success('User has been created')
      })
      .catch(err => toastr.error('Something went wrong'))
  }

  render() {
    return(
      <Mycontext.Provider value={{
        name: this.state.form.name,
        email: this.state.form.email,
        password: this.state.form.password,
        campus: this.state.form.campus,
        course: this.state.form.course,
        handleInput: this.handleInput,
        handleSubmit: this.handleSubmit
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}