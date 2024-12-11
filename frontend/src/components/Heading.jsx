import React from 'react'

const HeadingComponent = ({label}) => {
  return (
      <div className='font-bold text-3xl pt-6 flex justify-center '>
          {label}
    </div>
  )
}

export default HeadingComponent