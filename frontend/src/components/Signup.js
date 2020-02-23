import React from 'react'

const Signup = ({email, password, campus, course, handle, file}) => {
    return (
        <div>
        <form className="login" onSubmit={this.signup}>
                <h2>Signup</h2>
                <p>Email</p>
                <input onChange={handleInput} value={email} type="email" placeholder="email" name="email"></input>
                <p>password</p>
                <input onChange={handleInput} value={password} type="password" placeholder="password" name="password"></input>
                <p>Campus</p>
                <input onChange={handleInput} value={campus} type="text" placeholder="campus" name="campus"></input>
                <p>Course</p>
                <input onChange={handleInput} value={course} type="text" placeholder="course" name="course"></input>
                <input type="file" name="image" onChange={handleFile}/>
                <button type="submit">signpu</button>
            </form>
        </div>
    )
}

export default Signup
