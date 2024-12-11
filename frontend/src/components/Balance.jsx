import React from 'react'

const Balance = ({amount}) => {
  return (
      <div  className='font-bold text-2xl p-4 border-b-2'>
          Balance $: {amount}
    </div>
  )
}

export default Balance