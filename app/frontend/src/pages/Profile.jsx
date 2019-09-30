import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default class Profile extends Component {
  state = {
    user: JSON.parse(localStorage.getItem('user'))
  }

  handleInput = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.user)
  }

  updateUser = async () => {
    const { username, campus, course } = this.state.user
    const updatedUser = { username, campus, course }
    const response = await Axios.put(`http://localhost:3000/auth/edit/${this.state.user._id}`, updatedUser)
    // Sweet Alert
    Swal.fire(`🎉 ${response.data.msg}`, `<b>${response.data.user.username}</b> has been updated`, 'success')
    const strUser = JSON.stringify(this.state.user)
    localStorage.setItem('user', strUser)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.updateUser()
  }

  logOut = async () => {
    try {
      const response = await Axios.get('http://localhost:3000/auth/logout')
      Swal.fire('💃🚪 Success!', response.data.msg, 'success')
      localStorage.removeItem('user')
      this.props.history.push('/login')
    } catch (error) {
      Swal.fire('Oops...', error.message, 'error')
    }
  }

  componentDidMount() {
    !this.state.user && this.props.history.push('/login')
  }

  render() {
    const { user } = this.state

    return (
      <Layout>
        <Card>
          {user && (
            <div className='col-12'>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <header className='mb-4'>
                    <h1 className='h2' style={{ color: '#638165' }}>
                      Profile
                    </h1>
                  </header>
                  {/* Username */}
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <label htmlFor='username' className='text-muted'>
                        Username
                      </label>
                      <input
                        required
                        onChange={this.handleInput}
                        type='text'
                        name='username'
                        id='username'
                        className='form-control bg-light border-0'
                        value={user.username}
                      />
                    </div>
                    {/* Campus */}
                    <div className='form-group'>
                      <label htmlFor='campus' className='text-muted'>
                        Campus
                      </label>
                      <select
                        required
                        onChange={this.handleInput}
                        value={user.campus}
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
                    {/* Course */}
                    <div className='form-group'>
                      <label htmlFor='course' className='text-muted'>
                        Course
                      </label>
                      <select
                        required
                        onChange={this.handleInput}
                        value={user.course}
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
                    {/* Submit button */}
                    <button type='submit' className='btn btn-secondary btn-block'>
                      Update
                    </button>
                  </form>
                  {/* Logout button */}
                  <button onClick={this.logOut} className='btn btn-white text-danger btn-block'>
                    Log out
                  </button>
                </div>
                <div className='d-none d-md-block col-md-2'></div>
                <div className='col-12 col-md-5 my-auto'>
                  {/* Image */}
                  <div className='row'>
                    <div className='col-8 mx-auto'>
                      <img
                        src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F585e4beacb11b227491c3399.png&f=1&nofb=1'
                        alt='user'
                        className='img-fluid'
                      />
                    </div>
                    <div className='col-10 mx-auto'>
                      <button className='btn btn-light btn-block my-5'>Edit photo</button>
                      <small className='text-muted d-block' style={{ lineHeight: '1.5' }}>
                        The user is able to upload a new profile photo, using NodeJS and multer uploader
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </Layout>
    )
  }
}
