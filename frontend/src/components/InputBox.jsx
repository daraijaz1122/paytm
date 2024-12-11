import React from 'react'

const InputBox = ({label,placeholder}) => {
  return (
      <div>
          <label className='font-semibold mb-2 mt-2'> {label}</label><br/>
          <input placeholder={ placeholder} className='p-2 rounded-md w-full mb-4' />
    </div>
  )
}

export default InputBox