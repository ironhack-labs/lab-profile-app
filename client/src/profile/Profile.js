import React, { Component } from 'react'
import Logueo from '../logueo'
import '../App.css';

export default class Profile extends Component {


  state = {
    id: "",
    username: "",
    campus: "",
    course: "",
    file:null,
    mensaje: "",
    photo: ""
  }

  captoDatos = ()=>{
    let intentoLogin = new Logueo()
    intentoLogin.logueado()
    .then(data=>{
      this.setState({
        ...this.state,
        id: data._id,
        username: data.username,
        password: data.password,
        course: data.course,
        campus: data.campus,
        file: data.image,
        photo: data.image
        
      })
    })
  }

  enviar = (e)=>{
e.preventDefault()
    let intentoLogin = new Logueo()
    intentoLogin.update(this.state)
    .then(data=>{
      this.setState({
        ...this.state,
        mensaje: data.mensaje
      })
    })
  }

  uploadPhoto = (e)=>{
    e.preventDefault()
    let intentoLogin = new Logueo()
    console.log(this.state.file)
    intentoLogin.updatePhoto(this.state.file)
    .then(data=>{
      console.log(data)
      this.setState({
        ...this.state,
        mensaje: data.mensaje,
        photo: data.url
      })
    })

  }

  handler = (e) => {
    e.preventDefault()
    let value = e.target.value
   
    let newState = {
      ...this.state,
      [e.target.name]: value
    }
    this.setState(newState)
  }

handlerFoto = (e) =>{
  this.setState({
    file: e.target.files[0]
  })
}

  render() {
    if(this.state.username === ""){
  this.captoDatos()
}

    return (
      <div className="login">
      <h2>Profile:</h2>
    <form className="profile" onSubmit={this.enviar}>
    <label>Username:
    <input type="text" name="username"  onChange={this.handler} value={this.state.username}/>
    </label>
    <label>Password:
    <input type="text" name="password"  onChange={this.handler} value={this.state.password}/>
    </label>
    <label>Campus:
    <input type="text" name="campus"  onChange={this.handler} value={this.state.campus}/>
    </label>
    <label>Course:
    <input type="text" name="course"  onChange={this.handler} value={this.state.course}/>
    </label>
   <button>Enviar</button>
    </form>
    <form className="photo" onSubmit={this.uploadPhoto}>
    <label>Image:
    <input type="file" name="file" onChange={this.handlerFoto} /> <br/>
    <button>Subir Foto</button>

    </label>
    </form>
    <h1>{this.state.mensaje}</h1>
    <p><img key={this.state.photo} src={this.state.photo} alt="" /></p>
      </div>
    )
  }
}
