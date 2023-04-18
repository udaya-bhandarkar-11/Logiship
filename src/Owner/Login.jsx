import { domAnimation } from 'framer-motion'
import React from 'react'
import { StarsCanvas } from '../components/canvas'


const Login = () => {
  return (
    <div className='flex flex-col h-screen justify-center'>
    <StarsCanvas />
    <form action="" className='space-y-5'>
    <center>
    <h1 className='text-white text-[30px] font-bold'>Admin,please enter your LogIn details</h1>
    </center>
    <center>
      <input className='w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="email" placeholder='Enter your email or username' required />
    </center>
    <center>
       <input className='w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="password" placeholder='Enter your password' required/>
    </center>
    <center>
      <a className='text-white text-lg hover:text-bold hover:border-b border-spacing-5 duration-300' href="#">Forgotten password</a>
    </center>
    <center>
      <input className='w-96 p-2 px-3 centered bg-transparent border border-white outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300' type="SignUp" value='SignUp' />
    </center>
    </form>
    </div>
    
  )
}

export default Login