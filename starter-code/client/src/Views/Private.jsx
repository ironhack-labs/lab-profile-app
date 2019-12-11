import React, { Component } from 'react'

class Private extends Component {
  render() {
    const user= this.props.user;
    return (
      <div className='m-5 text-center'>
      {user &&  <div><h1>This is your private page and your name is {user.username}. </h1> 
      <br/> 
      <h3>You are studying {user.course} in {user.campus}!</h3></div>}
      </div>
    )
  }
}


export default Private
