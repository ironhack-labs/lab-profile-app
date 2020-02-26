import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth'


class Login extends Component{
    
    state = {
        username:'',
        password:''
    }
    
    handleInputs = ( { target: {name, value}}) => this.setState({[name]: value })
    
    handleSubmit = async () =>{
        const response = await AUTH_SERVICE.login(this.state)
        //console.log(response)
    }

    render(){

        return(
            <>
                {/* <h1>Holi</h1> */}

                <h1>Login</h1>
                <form>
                    <label>UserName</label>
                    <input value={this.state.username} onChange={this.handleInputs} type="text" name="username" placeholder="username here"/>
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleInputs} type="password" name="password" placeholder="password here"/>                
                </form>

                <h2>Hello!!</h2>
                <p>Awesome to have at IronProfile AGAIN!!</p>
                <br/>
                <p>If you signup. You agree with all our terms and coditions where we can do whatever we want with th data</p>
                <button onSubmit={this.handleSubmit}>Login</button>
            </>
        )
    }
}


export default Login