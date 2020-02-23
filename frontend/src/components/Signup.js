import React from 'react'

const Signup = ({signup, inputs, handle, file}) => {
    return (
        <div>
        <form className="login" onSubmit={signup}>
                <h2>Signup</h2>
                <p>Email</p>
                <input onChange={handle} value={inputs.email} type="email" placeholder="email" name="email"></input>
                <p>password</p>
                <input onChange={handle} value={inputs.password} type="password" placeholder="password" name="password"></input>
                <p>Campus</p>
                <input onChange={handle} value={inputs.campus} type="text" placeholder="campus" name="campus"></input>
                <p>Course</p>
                <input onChange={handle} value={inputs.course} type="text" placeholder="course" name="course"></input>
                <input type="file" name="image" onChange={file}/>
                <button type="submit">signUp</button>
            </form>
        </div>
    )
}

export default Signup
