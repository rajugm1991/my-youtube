

import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center '>
         <img
           alt="user"
           className="h-3"
           src="https://www.svgrepo.com/show/122119/user-image-with-black-background.svg"
         />
         <span className='font-bold p-2 text-sm'>{name}</span>
         <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage