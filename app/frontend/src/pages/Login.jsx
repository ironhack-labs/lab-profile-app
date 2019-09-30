import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
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

  verifyCredentials = async () => {
    try {
      const response = await Axios.post('http://localhost:3000/auth/login', this.state.user)
      const { username, campus, course, _id } = response.data.user
      this.setState({
        response: {
          user: {
            _id,
            username,
            campus,
            course
          },
          msg: response.data.msg
        }
      })
      // Local Storage
      const strUser = JSON.stringify(this.state.response.user)
      localStorage.setItem('user', strUser)

      // Sweet Alert
      Swal.fire('🙌 Welcome!', this.state.response.msg, 'success')
      this.props.history.push('/profile')
    } catch (error) {
      Swal.fire('¿Me quieres ver la cara de estúpida?', error.message, 'error')
      console.log(error)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.verifyCredentials()
  }

  render() {
    const { username, password } = this.state.user
    return (
      <Layout>
        <Card>
          <form onSubmit={this.handleSubmit} className='col-12'>
            <div className='row'>
              <div className='col-12 col-md-5'>
                <header className='mb-5'>
                  <h1 className='h2' style={{ color: '#638165' }}>
                    Log in
                  </h1>
                </header>
                {/* Form */}
                <div className='form-group'>
                  <label htmlFor='username' className='text-muted'>
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
                  <label htmlFor='password' className='text-muted'>
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
                <div className='my-3'>
                  <small>
                    If you don't have an account yet, you can create your account <Link to='/signup'>here</Link>
                  </small>
                </div>
              </div>
              <div className='d-none d-md-block col-md-2'></div>
              {/* Right */}
              <div className='col-12 col-md-5 d-flex flex-column justify-content-between'>
                <div className='d-none d-md-block'>
                  <h2 className='h3'>Hello!!</h2>
                  <p className='h4 text-muted font-weight-light'>Awesome to have an IronProfile again!</p>
                </div>
                <div>
                  <small className='text-muted d-none d-md-block my-3' style={{ lineHeight: '1.5' }}>
                    If you sign up, you agree with all our terms and conditions where we can do whatever we want with
                    the data
                  </small>
                  <button type='submit' className='btn btn-light btn-lg btn-block'>
                    Log in
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
