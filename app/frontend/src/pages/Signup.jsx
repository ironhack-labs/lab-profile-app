import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default class Signup extends Component {
  state = {
    user: {
      username: '',
      password: '',
      campus: '',
      course: ''
    },
    response: {}
  }

  handleInput = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  registerNewUser = async () => {
    try {
      const response = await Axios.post('http://localhost:3000/auth/signup', this.state.user)
      console.log(response)

      this.setState({
        response: {
          newUser: response.data.newUser,
          msg: response.data.msg
        }
      })
      // Sweet Alert
      const { newUser, msg } = this.state.response
      Swal.fire(`🎉 ${msg}!`, `The user <strong>${newUser.username}</strong> has been created`, 'success')
      this.props.history.push('/login')
    } catch (error) {
      Swal.fire('Something went wrong', error.message, 'error')
      console.log(error)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.registerNewUser()
    this.setState({
      user: {
        username: '',
        password: '',
        campus: '',
        course: ''
      }
    })
  }

  render() {
    const {
      user: { username, password, campus, course }
    } = this.state

    return (
      <Layout>
        <Card>
          <form onSubmit={this.handleSubmit} className='col-12'>
            <div className='row'>
              <div className='col-12 col-md-5'>
                <header className='mb-5'>
                  <h1 className='h2' style={{ color: '#638165' }}>
                    Sign up
                  </h1>
                </header>
                {/* Form */}
                <div className='form-group'>
                  <label className='text-muted' htmlFor='username'>
                    Username
                  </label>
                  <input
                    onChange={this.handleInput}
                    value={username}
                    type='text'
                    name='username'
                    id='username'
                    className='form-control bg-light border-0'
                    required
                  />
                </div>
                <div className='form-group'>
                  <label className='text-muted' htmlFor='password'>
                    Password
                  </label>
                  <input
                    onChange={this.handleInput}
                    value={password}
                    type='password'
                    name='password'
                    id='password'
                    className='form-control bg-light border-0'
                    required
                  />
                </div>
                <div className='form-group'>
                  <label className='text-muted' htmlFor='campus'>
                    Campus
                  </label>
                  <select
                    required
                    onChange={this.handleInput}
                    value={campus}
                    className='form-control bg-light border-0'
                    name='campus'
                    id='campus'
                  >
                    <option value='' disabled></option>
                    <option value='Madrid'>Madrid</option>
                    <option value='Barcelona'>Barcelona</option>
                    <option value='Miami'>Miami</option>
                    <option value='Paris'>Paris</option>
                    <option value='Berlin'>Berlin</option>
                    <option value='Mexico'>Mexico</option>
                    <option value='Amsterdam'>Amsterdam</option>
                    <option value='Sao Paulo'>Sao Paulo</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label className='text-muted' htmlFor='course'>
                    Course
                  </label>
                  <select
                    required
                    onChange={this.handleInput}
                    value={course}
                    className='form-control bg-light border-0'
                    name='course'
                    id='course'
                  >
                    <option value='' disabled></option>
                    <option value='WebDev'>WebDev</option>
                    <option value='UX/UI'>UX/UI</option>
                    <option value='Data Analytics'>Data Analytics</option>
                  </select>
                </div>
              </div>
              <div className='d-none d-md-block col-md-2'></div>
              {/* Right */}
              <div className='col-12 col-md-5 d-flex flex-column justify-content-between'>
                <div className='d-none d-md-block'>
                  <h2 className='h3'>Hello!!</h2>
                  <p className='h4 text-muted font-weight-light'>Welcome to IronProfile!</p>
                </div>
                <div>
                  <small className='text-muted d-block my-3' style={{ lineHeight: '1.5' }}>
                    If you sign up, you agree with all our terms and conditions where we can do whatever we want with
                    the data
                  </small>
                  <button type='submit' className='btn btn-light btn-lg btn-block'>
                    Create the Account
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Card>
      </Layout>
    )
  }
}
