import React, { createContext, Component } from 'react'
import AuthService from '../services/Auth'
import toastr from 'toastr'
import history from "../components/history";

export const Mycontext = createContext()

const service = new AuthService()

export default class MyProvider extends Component{
  state = {
    form: {
      name: '',
      email: '',
      password: '',
      campus: '',
      course: '',
      photo: ''
    }
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleSubmitSignup = e => {
    service
      .signup(this.state.form)
      .then(response => {
        console.log(response)
        toastr.success('User has been created')
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
      })
      .catch(err => toastr.error('Something went wrong'))
  }

  handleSubmitLogin = e => {
    service
      .login(this.state.form)
      .then(response => {
        if(response.err) return toastr.error(response.err)
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
        toastr.success('Login successful!')
        history.push('/loggedin')
      })
      .catch(err => toastr.error('Something went wrong'))
  }

  handleLogout = e => {
    service
      .logout()
      .then(response => {
        window.localStorage.clear()
        toastr.success('Logout successful!')
        history.push('/')
      })
      .catch(err => toastr.error(err))
  }

  handleImageUpload = async e => {
    const uploadData = new FormData()
    uploadData.append('file', e.target.files[0])
    uploadData.append('upload_preset', 'ironprofile')

    const response = await fetch(
      '', 
      {
        method: 'POST',
        body: uploadData
      })

    const photo = await response.json()
    
    this.setState({
      photo: photo.eager[0].url
    })
  }

  render() {
    return(
      <Mycontext.Provider value={{
        form: this.state.form,
        handleInput: this.handleInput,
        handleSubmitSignup: this.handleSubmitSignup,
        handleSubmitLogin: this.handleSubmitLogin,
        handleLogout: this.handleLogout
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}