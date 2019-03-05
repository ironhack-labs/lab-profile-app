import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
let url = "http://localhost:3000/private";


export default class Profile extends React.Component {
    state = {user:{}}

    componentDidMount(){
        axios.get(url, {withCredentials: true})
            .then(res => {
                this.setState({user: res.data.user})
                this.forceUpdate()
            })
            .catch(e=> this.history.push("/login"))
    }
                    
    componentWillReceiveProps(){
        axios.get(url, {withCredentials: true})
        .then(res => {
            this.setState({user: res.data.user})
            this.forceUpdate()})
        .catch(e=> this.history.push("/login"))                                 
    }

    render() {
        let { profilePic, username, email } = this.state.user
        console.log(this.state.user)
        return (
            <div>
                <img src={profilePic} alt="profilepic" height="250" />
                <h3>Username : {username}</h3>
                <p>Email: {email}</p>
                <Link to="/profile/edit"><button>Edit</button></Link>
            </div>
        )
    }
}