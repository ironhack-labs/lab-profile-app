import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/authService'




export default class Profile extends Component {

    service = new AuthService()

    logout = () => {
        this.service.logout()
        .then(response => {
            this.props.getTheUser(null)
        })
        .catch(err => console.log(err))
    }

    handleFileUpload = (e) => {
        const uploadData = new FormData()

        uploadData.append('profileImage', e.target.files[0])
        this.service.imageUpload(uploadData)
    }

    render() {
    
       if(!this.props.loggedInUser){
           return <h1>Loading</h1>
       }

        return (
       
            <div className='card'>
                <h1>Profile</h1>
                <p>Username</p>
                <h3>{this.props.loggedInUser.username}</h3>
                <p>Campus</p>
                <h3>{this.props.loggedInUser.campus}</h3>
                <p>Course</p>
                <h3>{this.props.loggedInUser.course}</h3>

                <Link to='/logout' onClick={this.logout}>Logout</Link>
                
                <img src='' alt='profile picture'></img>
                <form>
                    <input type='file' name='profileImage' onChange={(e) => this.handleFileUpload(e)} />
                    <button type='submit'>Edit Photo</button>
                </form>
            </div>
        )
    }
}
