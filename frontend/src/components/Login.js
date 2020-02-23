import React from 'react'

const Login = ({inputs, handle, login}) => {
    return (
        <div>
            <form className="login" onSubmit={login}>
                <h2>Login</h2>
                <p>Email</p>
                <input onChange={handle} value={inputs.email} type="email" placeholder="email" name="email"></input>
                <p>password</p>
                <input onChange={handle} value={inputs.password} type="text" placeholder="password" name="password"></input>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login

