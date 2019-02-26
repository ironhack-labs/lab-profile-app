import React, { Component } from 'react'
import Boton from '../boton/Boton'
import { Link,Switch,Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="home">
        <h2>IronProfile</h2> 
        <div className="p">Today we will create an app<br/> with authoritation. Adding <br/>some cool styles!</div>
        <div className="buttons"> 
          <p><Link to="/signup"><Boton title="SignUp" /></Link></p>
         <p> <Link to="/login"><Boton title="Login" /></Link> </p>    
        </div>
         </div>
      
    )
  }
}
