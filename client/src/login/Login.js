import React, { Component } from 'react'
import Input from '../input/Input'
import Boton from '../boton/Boton'
import Logueo from '../logueo'
import Profile from '../profile/Profile'

export default class Login extends Component {

  state = {
    username: "",
    password: "",
    mensaje: ""
  }


  handler = (e) => {
    e.preventDefault()
    let newState = {
      ...this.state,
      [e.target.name]: e.target.value
    }
    this.setState(newState)
  }

  login = (e) => {
    e.preventDefault()

    let logueo = new Logueo();
    logueo.login(this.state)
      .then((data) => {
        if(data === undefined){
         
          this.setState({
            ...this.state,
            mensaje: "Login incorrecto, merluzo"
          }
          )
        } else {

          
            
        this.setState({
          ...this.state,
          mensaje: data.mensaje
        })
      }
      }
)
  }


  render() {
    return (
      <div className="loginBueno">
        <h2>Login</h2>
        <form onSubmit={this.login}>

          <label>
            <p>Name:</p> 
            <input type="text" name="username" onChange={this.handler} value={this.state.username}></input>
            </label>
            <label>        
              <p>  Password: </p>
                <input type="text" name="password" onChange={this.handler} value={this.state.password}></input>
                </label>
          
          <Boton title="Log in" />
          
        </form>
      <h2>{this.state.mensaje}</h2>
      </div>

    )
  }
}
