import React, { Component } from 'react'
import AuthService from '../auth/authService'

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadClicked: false,
            imageFile: null
        }
        this.service = new AuthService()
    }
    clickEdit = () => {
        this.setState(state => ({
            ...state,
            uploadClicked: true
        }))
    }
    fileChange = ({target}) => {
        this.setState(state => ({
            ...state,
            imageFile: target.files[0]
        }))
    }
    logout = () => {
        this.service.logout()
        .then(() => {
            this.props.history.push('/')
            this.props.getUser(null)
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className='box d-flex flex-row'>
                <div className='box-element d-flex flex-column justify-content-around'>
                    <div>
                        <h2>Profile</h2>   
                    </div>
                    <div>
                        <h5>Username</h5>
                        <h4>{this.props.user.username}</h4>
                        <h5>Campus</h5>
                        <h4>{this.props.user.campus}</h4>
                        <h5>Course</h5>
                        <h4>{this.props.user.course}</h4>  
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={this.logout}>Logout</button>  
                    </div>
                </div>
                <div className="box-element image d-flex flex-column justify-content-around align-items-center">
                    <img src={this.props.user.image} alt="Profile pic"/>
                    {
                        !this.state.uploadClicked ?
                        <button onClick={this.clickEdit}>Edit Photo</button> :
                        // FALTA EL ONSUBMIT Y EL ONCHANGE
                        <form>
                            <input type='file' name='image' onChange={this.fileChange}/>
                            <input className='btn' type='submit' value='Upload photo'/>
                        </form>
                    }
                </div>
            </div>
        )
    }
}

export default Profile
