import React from 'react'

function LoginPage() {
  return (
    <div>
      <h1>
        Login
      </h1>
      <form>
        <input type={"email"} placeholder="your@email.com"/>
        <input type={"password"} placeholder="password"/>
      </form>
    </div>
  )
}

export default LoginPage