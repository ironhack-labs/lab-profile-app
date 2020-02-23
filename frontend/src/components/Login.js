import React from 'react'

const Login = ({email, password}) => {
    return (
        <div>
            <form className="login" onSubmit={this.login}>
                <h2>Login</h2>
                <p>Email</p>
                <input onChange={this.handleInput} value={this.state.email} type="email" placeholder="email" name="email"></input>
                <p>password</p>
                <input onChange={this.handleInput} value={this.state.password} type="text" placeholder="password" name="password"></input>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login

