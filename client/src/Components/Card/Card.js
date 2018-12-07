import React, { Component } from 'react'
import './Card.css'
import ButtonSignUp from '../ButtonSignUp/ButtonSignUp'
import ButtonLogin from '../ButtonLogin/ButtonLogin'


export default class Card extends Component {
  render() {
    return (
      <div className="card-background">
       <h2>Ironprofile</h2>
       <p>Today we will create an app with authoritation, adding some cool styles!</p>
        <ButtonSignUp />
             <ButtonLogin />
   
      </div>
    )
  }
}
