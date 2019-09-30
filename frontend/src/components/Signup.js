import React, { Component } from 'react'
import { Card, Input, Form, Button } from 'antd'
import AUTH_SERVICE from '../services/auth'
import axios from 'axios'
import { MyContext } from '../context'

class Signup extends Component {
  state = {
    user: { username: '', campus: '', image: '', course: '' }
  }

  handleInput = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  onSubmit = e => {
    e.preventDefault()
    AUTH_SERVICE.signup(this.state.user)
      .then(response => {
        this.props.history.push('/login')
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }



  render() {
    const { user } = this.state
    console.log(this.state.user)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className={{ width: '50vw' }}>
          <form onSubmit={this.onSubmit}>
            <div
              className="container sign-up-total"
              style={{
                display: 'flex',
                backgroundImage: 'url(https://i.ibb.co/zsxmYbt/oval-bg.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="col-md-6"
                style={{
                  display: 'inline-block',
                  marginTop: '20px'
                }}
              >
                <div className="form-group">
                  <h1>Sign up</h1>
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput">Username</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="text"
                    className="form-control"
                    onChange={this.handleInput}
                    name="username"
                    value={user.username}
                  />
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Password</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="password"
                    className="form-control"
                    onChange={this.handleInput}
                    value={user.password}
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Campus</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="campus"
                    value={user.campus}
                  />
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Course</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="course"
                    value={user.course}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput">Image</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="image"
                    value={user.image}
                  />
                </div>
              </div>
              <div
                className="col-md-4 offset-md-1"
                style={{
                  display: 'inline-block',
                  marginTop: '30px'
                }}
              >
                <div>
                  <h2>Hello!</h2>
                </div>
                <div>
                  <h4>Welcome to the IronProfile!</h4>
                </div>
                <div
                  className="text-container"
                  style={{
                    marginTop: '180px',
                    height: '60px'
                  }}
                >
                  If you sign up, you agree with all our current terms and
                                    conditions where we can do whatever we want with the data!
                                  
                </div>

                <Button
                  htmlType="submit"
                  style={{
                    height: '40px',
                    marginTop: '80px',
                    border: 'none',
                    borderStyle: 'none'
                  }}
                >
                  Create accont
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Signup.contextType = MyContext

export default Signup
