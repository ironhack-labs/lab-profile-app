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
      <main className='main-card'>
        <div className='card-left'>
          <h1>IronProfile</h1>
          <p>Today we will create an app
            <br/>with authorization, adding
            <br/>some cool styles!</p>
          <div className='home-buttons-wraper'>
            <Button className='home-button button' name='Log in' />
            <Button className='home-button button' name='Sign up' />
          </div>
        </div>
        <div className='card-rigth' />
      </main>
    )
  }
}

export default Home;