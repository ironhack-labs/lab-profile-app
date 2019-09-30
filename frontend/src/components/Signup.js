import React from 'react'
import AUTH_SERVICE from '../services/auth'

class Signup extends React.Component {
  state = {
    user: {}
  }

  handleInput = (ev) => {
    const { user } = this.state
    const key = ev.target.name
    user[key] = ev.target.value
    this.setState({ user })
  }

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/login')
      })
      .catch((error) => {
        console.log('error');
      });
  };

  render() {
    return (
      <>
      <h1 style={{color: '#638165',display: 'flex', justifyContent: 'center', marginTop:'15% 0 0 0'}}>Signup</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width:'100vw', height: '80vh' }}>
        
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input onChange={this.handleInput} type="text" name="username"/>
          <label>Password</label>
          <input onChange={this.handleInput} type="password" name="password"/>
          <label>Campus</label>
          <input  onChange={this.handleInput} type="text" name="campus"/>
          <label>Course</label>
          <input onChange={this.handleInput} type="text" name="course"/>
          <br/> <br/>
          <div  style={{display: 'flex', justifyContent: 'center'}}>
          <button
            
            style={{
              backgroundColor: '#c0e3be',
              color: '#638165',
              margin: '15px',
              width: '200px',
              border: 'none',
              display: 'block'
            }}
          >
            Log out
          </button>
          </div>
        </form>
      </div>
      </>
    )
  }


}

export default Signup