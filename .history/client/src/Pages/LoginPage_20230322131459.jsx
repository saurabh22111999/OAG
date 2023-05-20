import React from 'react'

function LoginPage() {
  return (
    <div className='mt-4 grow flex '>
      <h1 className='text-4xl text-center mb-4'>
        Login
      </h1>
      <form className='max-w-md mx-auto'>
        <input type={"email"} placeholder="your@email.com"/>
        <input type={"password"} placeholder="password"/>
        <button className='primary'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage