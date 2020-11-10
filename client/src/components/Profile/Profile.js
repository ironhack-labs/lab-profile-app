import React, { Component } from 'react'
import AuthService from '../../services/authService'
import {Redirect} from 'react-router-dom'

export default class Profile extends Component {

    state ={ 
        redirect: false
    }

    service = new AuthService()

    fileUploadHandler = e => {
        const uploadData = new FormData()
        uploadData.append("image", e.target.files[0] )
        this.service.upload(uploadData)
        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <form>
                    <label>Profile picture</label>
                    <input
                        type = "file"
                        name="image"
                        onChange={(e) => this.fileUploadHandler(e)}
                    />
                </form>
            </div>
        )
    }
}
