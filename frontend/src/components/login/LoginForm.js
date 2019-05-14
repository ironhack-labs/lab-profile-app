import React from 'react'

function LoginForm({ handleInputs, handleSubmit }) {
  return (
    <div>
      <input type="email" name="email" onChange={handleInputs} />
      <input type="password" name="password" onChange={handleInputs} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default LoginForm