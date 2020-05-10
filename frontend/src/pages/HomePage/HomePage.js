import React from 'react'
import { Link } from 'react-router-dom'

import './HomePage.scss';

import Button from '../../components/Button/Button';

const HomePage = () => 
  
    <div className="home">
      <article className="home__content">
        <h1 className="title home__title">Iron Profile</h1>
        <p className="home__text">
          Today we will create an app 
          with authorization, adding 
          some cool styles
        </p>
      </article>
      <div className="home__btn-container">
        <Link to="/signup">
          <Button btnClass='button--home'>Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button btnClass='button--home'>Log in</Button>
        </Link>
      </div>
    </div>


export default HomePage
