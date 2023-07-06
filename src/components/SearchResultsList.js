

import React from 'react'
import { Link } from 'react-router-dom';

const SearchResultsList = ({items}) => {

    const {snippet} =  items;
    const {channelTitle,title,description,thumbnails,publishTime,publishedAt}=snippet;
    

  return (
    <div className='flex p-2 m-2'>
      <Link key={items.id.videoId} to={'/watch?v='+items.id.videoId} className='flex'>  <div>
        <img alt='Video' src={thumbnails.medium.url} className='rounded-lg '></img>
        </div>
        <div className='p-4'>
            <ul>
                <li><h2 className='font-bold'>{title}</h2></li>
                 <li className='lex'> 
                 <img
           alt="user"
           className="h-3"
           src="https://www.svgrepo.com/show/122119/user-image-with-black-background.svg"
         /> <span className=''>{channelTitle}</span>
                </li>
                <li><span className='text-sm'>{description}</span></li>
            </ul>
        </div></Link>
       
    </div>
  )
}

export default SearchResultsList