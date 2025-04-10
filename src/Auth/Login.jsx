
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";


import React from 'react'

const Login = () => {

    const { loginWithRedirect } = useAuth0();


const login =(e)=>{
    e.preventDefault()
}

  return (
    <div className='pt-20'>
      <div>
        <form onSubmit={login} className='shadow-2xl shadow-gray-900 w-96 m-auto p-5 mt-10 flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email' className='outline-none border-1 rounded-2xl p-2'/>

          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' className='outline-none border-1 rounded-2xl p-2'/>

          <button
         
          className='outline-none border-1 rounded-2xl p-2 mt-4 bg-green-700'>Login</button>
          <p className='text-center my-1'>or</p>
          <button
           onClick={()=>{
            loginWithRedirect();
          }}
          className='outline-none border-1 rounded-2xl p-2 flex gap-x-3 justify-center items-center'>Login With Google <FcGoogle size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login