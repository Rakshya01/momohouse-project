import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

function Profile() {
    const { user, logout, isAuthenticated, isLoading } = useAuth0();
    console.log(user);

  return (
    <div className='pt-20'>
<div className=' w-[700px] p-1 m-auto mt-14  flex gap-5 shadow-2xl shadow-gray-400 rounded-2xl'>

      <div>

      <img className='h-52 rounded-2xl ' src={user?.picture} alt="" />

      </div>
      <div className='mt-5 space-y-4'>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Email Verification: {user?.email_verified}</p>
      <hr/>

      <button
      onClick={()=>{
        logout();
      }}
      className='bg-black text-white rounded-xl p-2 w-28 '>Logout</button>
      </div>
</div>

    </div>
  )
}

export default Profile
