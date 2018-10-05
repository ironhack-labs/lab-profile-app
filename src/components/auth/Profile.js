import React, {Component} from 'react'
import logo from '../../logo.svg'
import axios from 'axios'
import toastr from 'toastr'

class Profile extends Component{

    state = {
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})
    }
    getPrivateInfo = () =>{
        axios.get('http://localhost:3000/private',{
            headers:{
                "Authorization": localStorage.getItem('token')
            }
        }).then(res=>{console.log(res)})
        .catch(e=>toastr.error("Algo falló",e.message))
    }

    render(){
        const {user} = this.state
        return(
            <div className="father" width="80px">
                <img style={{borderRadius:'50%'}} src="https://i.stack.imgur.com/l60Hf.png" width="200" alt="user"/>
                <p>Username</p>
                <h1>{user.username}</h1>
                <p>Campus</p>
                <h1>Sao Paulo</h1>
            </div>
        )
    }
}

export default Profile