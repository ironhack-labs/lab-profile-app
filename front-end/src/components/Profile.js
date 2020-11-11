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

       console.log(this.props.loggedInUser)
        return (

       
            <div className='card'>
                <div>
                    <div className='card-left'>
                        <h1>Profile</h1>
                        <p>Username</p>
                        <h3>{this.props.loggedInUser.username}</h3>
                        <p>Campus</p>
                        <h3>{this.props.loggedInUser.campus}</h3>
                        <p>Course</p>
                        <h3>{this.props.loggedInUser.course}</h3>

                        <Link to='/' onClick={this.logout}>Logout</Link>
                    
                    </div>

                    <div className='card-right'>
                        <img src={
                            this.props.loggedInUser.image === `http://localhost:5000/uploads/default.png`
                            ? `http://localhost:5000/uploads/default.png`
                            : `http://localhost:5000/uploads/${this.props.loggedInUser.image}`} alt={this.props.loggedInUser.username}></img>
                        <form>
                            <input type='file' name='profileImage' onChange={(e) => this.handleFileUpload(e)} />
                            {/* <button type='submit'>Edit Photo</button> */}
                        </form>
                    </div>
                    

                </div>
          
            </div>
        )
    }
}
