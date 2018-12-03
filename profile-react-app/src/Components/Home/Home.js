import React, {Component} from 'react'
import LinkButton from '../Commun/LinkButton';
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
          <p className='card-text'>Today we will create an app
            <br/>with authorization, adding
            <br/>some cool styles!</p>
          <div className='home-buttons-wraper'>
            <div className='button-wraper'>
              <Link to='/login' className='home-button button main-card-link'>
                <LinkButton name='Log in' />
              </Link> 
            </div>
            <div className='button-wraper'>
              <Link to='/signup' className='home-button button main-card-link'>
                <LinkButton className='home-button button' to='/signup' name='Sign up' />
              </Link> 
            </div>
          </div>
        </div>
        <div className='card-rigth' />
      </main>
    )
  }
}

export default Home;