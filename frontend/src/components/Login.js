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
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        //console.log(response.data);
        this.props.history.push('/auth/profile')
      })
      .catch((error) => {
        console.log('error');
      });
  };

  render() {
    return (
      <>
      <h1 style={{color: '#638165',display: 'flex', justifyContent: 'center', marginTop:'5%'}}>Login</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width:'100vw', height: '80vh' }}>
    
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input onChange={this.handleInput} type="text" name="username"/>
          <label>Password</label>
          <input onChange={this.handleInput} type="password" name="password"/>
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
        </form>
      </div>
      </>
    )
  }


}

export default Signup