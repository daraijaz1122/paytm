import React from 'react'
import { Link } from 'react-router-dom'

const BottomComponent = ({description,to,linkText}) => {
  return (
    <div className='mt-2 flex justify-center'>
      {description}
      <Link className='text-blue-500 underline hover:text-blue-700 pl-1' to={to}> {linkText }</Link>
    </div>
  )
}

export default BottomComponent