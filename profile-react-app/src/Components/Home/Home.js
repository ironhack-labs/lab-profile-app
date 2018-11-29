import React, {Component} from 'react'
import Button from '../Commun/Button';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <main>
        <h1>Home</h1>
        <Link to='/login'>
          <Button name='Log in' />
        </Link>
        <Link to='/signup'>
          <Button name='Sign up' />
        </Link>
      </main>
    )
  }
}

export default Home;