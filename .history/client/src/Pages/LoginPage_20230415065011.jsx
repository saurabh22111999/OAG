import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  return (
    <div className='mt-4 grow flex items-center justify-around '>
    <div className='mb-64'>

      <h1 className='text-4xl text-center mb-4'>
        Login
      </h1>
      <form className='max-w-md mx-auto'>
        <input type={"email"} placeholder="your@email.com" value={email} onChange={ev=>}/>
        <input type={"password"} placeholder="password"/>
        <button className='primary mt-1'>Login</button>
        <div className='text-center py-2 text-gray-500'>Don't have an account yet?<Link className='underline text-black' to={'/register'}>Register here</Link></div>
      </form>
    </div>
    </div>
  )
}

export default LoginPage