import React from 'react'

const SubmitButton = ({onclick,label}) => {
  return (
      <div>
          <button className=' bg-sky-600 px-4 py-2 rounded-lg mt-4 hover:bg-sky-300 font-semibold w-full' onClick={onclick}>{label}</button>
    </div>
  )
}

export default SubmitButton;