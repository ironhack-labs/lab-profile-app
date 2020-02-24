import React, { Component } from "react"
import authService from "../../services/authService"
import {Link} from 'react-router-dom'

export default class Profile extends Component {
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

    logout = async () => {
        await authService.logout()
        this.props.history.push("/login")
    }

    handleFile = e => {
        const formData = new FormData()
        formData.append("photoURL", e.target.files[0])
        authService.upload(formData)
        .then(({data:{image}} ) => {
            this.setState({image})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <section>
                    <h2>Profile</h2>
                    <form>
                        <h4>Username</h4>
                        <p>{this.state.username}</p>
                        <h4>Campus</h4>
                        <p>{this.state.campus}</p>
                        <h4>Course</h4>
                        <p>{this.state.course}</p>
                    </form>
                    <button onClick={this.logout}>Log Out</button>
                </section>
                <section>
                    <div>
                        <img src={this.state.image} alt="qw"/>
                        <input type="file" name="photoURL" onChange={this.handleFile}/>
                    </div>
                    <div>
                        <p>The user is able to upload a new profile photo</p>
                    </div>
                </section>   
            </div>
        )
    }
}