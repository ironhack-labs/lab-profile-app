import React, {Component} from 'react'
import Button from '../Commun/Button';
import {Link} from 'react-router-dom';
import {isLoggedIn} from '../../authService';

class Home extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount(){

    isLoggedIn(this.props.history)

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