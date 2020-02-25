import './index.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import authService from "../../services/authService.js"

export default class Home extends Component {
    state = {
        username: "",
        campus: "",
        course: "",
        image: ""
    }
    
    componentDidMount = async ()=>{
        const res = await authService.loggedin().catch( ()=> this.props.history.push("/login"))
        if( res && res.data){
            const {data: {user: {username, campus, course, image}} } = res
            this.setState({username, course, campus, image})        
        }
    }

    handleEdit=()=>{
        document.getElementById('getFile').click()
    }
/*
    handleFile = e => {
        const formData = new FormData()
        formData.append("photoURL", e.target.files[0])
        authService.upload(formData)
        .then(({data:{image}} ) => {
            this.setState({image})
           // window.location.reload(false);
        })
        .catch(err => {
            console.log(err)
        })
    }
*/
    handleFile = e => {
        const formData = new FormData();
        formData.append("photoURL", e.target.files[0]);
        authService.upload(formData)
          .then(({ data }) => {
            const {user: {username, campus, course, image}} = data
            this.setState({username, campus, course, image})
          })
          .catch(err => {
            console.log(err);
          });
      };    
    
    handleLogout=async()=>{
        await authService.logout()
        this.props.history.push("/")

    }

    render() {
        return (
            <div className="Profile">
            <div>
            <article className="ProfileInfo">
            <h1>Profile</h1>
            <br/><br/>
            <label>Username</label>
            <h3>{this.state.username}</h3>
            <label>Campus</label>
            <h3>{this.state.campus}</h3>  
            <label>Course</label>
            <h3>{this.state.course}</h3>  
            <br/><br/><br/><br/>
            <h5 onClick={this.handleLogout}>Logout</h5>
            </article>
            <article className="ProfilePhoto">
            <img alt="photo" src={this.state.image}></img>
            <input type='file' name="photoURL" id="getFile" style={{display:'none'}} onChange={this.handleFile} />
            <h5 onClick={this.handleEdit}>Edit Photo</h5>
            
            <br/><br/><br/><br/>
            <p>The user is able to upload a new</p>
            <p>profile photo, using NodeJS and</p>
            <p>Multer uploader.</p>
            </article>
            </div>
            </div>
        )
    }
}
