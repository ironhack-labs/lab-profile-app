import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="mainDiv container">
                <div className="row">
                    <div className="col-6 info-div">
                        <h4>Profile</h4>
                        <p>Username</p>
                        <h5>{this.props.user.username}</h5>
                        <p>Campus</p>
                        <h5>{this.props.user.campus}</h5>
                        <p>Course</p>
                        <h5>{this.props.user.course}</h5>
                        <p>Logout</p>
                    </div>
                    <div className="col-6 info-div">
                        <img className="profilePhoto" src={this.props.user.image} alt={this.props.user.username}/>
                        <input/>
                        <p>The user is able to upload a new profile photo using NodeJs and Multer uploader</p>
                    </div>
                </div>
            </div>
        )
    }
}
