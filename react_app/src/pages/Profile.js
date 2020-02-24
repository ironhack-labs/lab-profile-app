import React, { Component } from 'react'
import AUTH_SERVICE from '../services/authServices'

export default class Profile extends Component {
    state={
        user:null
    }
    logout=()=>{
        AUTH_SERVICE.logout()
          .then(({ data }) => {
            alert('Sesión cerrada')
              this.props.history.push('/login')
          })
          .catch((err) => {
            alert(err)
          })
    }
    handleFile = e => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        AUTH_SERVICE.uploadPhoto(formData)
          .then(({ data }) => {
            this.setState({ user: data.user })
          })
          .catch(err => {
            console.log(err)
          })
      }
    render() {
        return (
            <div>
                <div className="Profile">
                    <div className="Profile-izquierda">
                        <h1>Profile</h1>
                        <br/>
                        <br/>
                        <label>Username</label>
                        <br/>
                        {this.state.user && <p>{this.state.user.name}</p>}
                        <br/>
                        <label>Campus</label>
                        <br/>
                        {this.state.user && <p>{this.state.user.campus}</p>}
                        <br/>
                        <label>Course</label>
                        <br/>
                        {this.state.user && <p>{this.state.user.course}</p>}
                        <br/>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                    <div className="Profile-derecha">
                    {this.state.user &&  <img src ={this.state.user.image}/>}
                        {!this.state.username && <img src ="https://blog.aulaformativa.com/wp-content/uploads/2016/08/consideraciones-mejorar-primera-experiencia-de-usuario-aplicaciones-web-perfil-usuario.jpg"/>}
                        <br />
                        <small>The user is able to upload new profile photo,using NodeJS and Multer uploader.</small>
                        <br/>
                        <button onClick={this.handleFile}>Edit photo</button>                        
                    </div>

            </div>
            </div>
        )
    }
}
