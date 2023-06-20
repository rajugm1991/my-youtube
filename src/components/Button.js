

import React from 'react'

const Button = ({val}) => {
  return (
    <div className='p-2'>
     <button className= 'bg-gray-100 p-3 rounded-lg'>{val}</button>    
    </div>
  )
}

export default Button