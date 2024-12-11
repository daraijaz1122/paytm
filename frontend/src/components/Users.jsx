import React from 'react'

const User = () => {
  return (
      <div className='p-4 w-full'>
          <h1 className='font-semibold text-xl'>Users</h1>
          
      
      <input type='text' placeholder='Search' className="p-4 mt-4 rounded-lg w-full  bg-green-100" />
      
      <div className='flex justify-between p-3 mt-4 bg-gray-200'>
        <h1 className='font-semibold text-xl'>{"firstname"} {"lastname"}</h1>
        <button className='px-4 py-2 rounded-lg hover:bg-blue-600 bg-gray-950 text-white'>Pay</button>
      </div>
         
    </div>
  )
}

export default User