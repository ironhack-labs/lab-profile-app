import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import AuthService from '../services/authService'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMsg: '',
        redirect: false
    }

    service = new AuthService()

    onChangeHandler = e => {
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
        
    }
    
    
    
    
    render() {
       if(this.state.redirect){
           return <Redirect to='/'></Redirect>
       }
       
        return (
            <div>
            <form>
                <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.onChangeHandler}></input>

                <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.onChangeHandler}></input>
                <button>Login</button>
            </form>
            {this.state.errorMsg}

                
            </div>
        )
    }
}
