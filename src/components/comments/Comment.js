import React from 'react'

const Comment = ({data}) => {
    return (
        <div className="flex p-1"> 
        <div className="p-1">
        <img
           alt="user"
           className="h-12 mx-2"
           src="https://www.svgrepo.com/show/122119/user-image-with-black-background.svg"
         />
        </div>
    
        <div className="m-1">
         <h3 className="font-bold">{data.name}</h3>
         <p>{data.comment} </p>
        </div>
    
       </div>
      )
}

export default Comment