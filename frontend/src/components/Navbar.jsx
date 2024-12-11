import React from 'react'

const Navbar = ({username,firstLetter}) => {
  return (
      <div className='flex justify-between p-4 border-b-2'>
          <div className='font-bold text-3xl py-4 '> Payments App</div>
          <div className='flex justify-center'>
              <div className='font-semibold pt-6'> Hello,{username}</div>
             
              <div className='ml-4 text-xl px-6 py-5 bg-green-300 rounded-3xl '>
                  {firstLetter}
              </div>
           </div>
    </div>
  )
}

export default Navbar 