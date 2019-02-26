import React, { Component } from 'react'
import Boton from '../boton/Boton'
import { Link,Switch,Route } from 'react-router-dom';
import Input from '../input/Input'
import '../App.css';
import Logueo from '../logueo'

export default class Signup extends Component {

  state = {
    username: "",
    password: "",
    campus: "",
    course: "",
    image: "",
    mensaje: ""

  }

   enviar = (e)=>{
    e.preventDefault();
    let logueo = new Logueo();
     logueo.signUp(this.state)
     .then((data)=>{

      this.setState({
        ...this.state,
        mensaje: data.mensaje
      }
      )

     }


     ) 
   }

   handler = (e)=>{
    e.preventDefault()
    let newState = {
      ...this.state,
      [e.target.name]: e.target.value
    }
    this.setState(newState)
   }



  render() {
    return (
      <div className="login signup">
    
    <div className="left"> 
      
    <form  className="formProfile" onSubmit={this.enviar}>
    <h2>SignUp</h2> 
   <label> 
    <p>Name:</p>
    <input type="text" name="username" onChange={this.handler} value={this.state.username}></input>
    </label>
    <label> 
    <p>Password:
    </p>
       <input type="text" name="password" onChange={this.handler} value={this.state.password}></input>
    </label>
    
    
  <label> 
   <p> Campus:</p> <input type="text" name="campus" onChange={this.handler} value={this.state.campus}></input>
    </label>
    
    
    <label> 
    <p>Course:</p> <input type="text" name="course" onChange={this.handler} value={this.state.course}></input>
    </label>
    
    
    <label> 
    <p>Image:</p><input type="text" name="image" onChange={this.handler} value={this.state.image}></input>
    </label>
    
<h1>{this.state.mensaje}</h1>

      <Boton className="malditoBoton" title="Create the Account"/>
    </form>
    </div>
    <div className="right">
     <h2>Hello!!</h2>  
     <p className="sub"> 
      Welcome to IronProfile
     </p>

     <div>

       <p className="parrafo">If you signup, you agree with all our<br/>
        terms and conditions where we can<br/>
         do whatever we want with the data</p>
     </div>
    </div>
    
      </div>
  
    )
  }
}
