import React from 'react'

const Login = ({ onLoginSuccess }) => {
  return (
    <div>
        <button className="p-2 border" onClick={onLoginSuccess}>Login</button>
    </div>
  )
}

export default Login