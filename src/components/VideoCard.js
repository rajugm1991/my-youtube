

import React from 'react'

const VideoCard = ({item}) => {
    const {snippet,statistics} =item;
    const {channelTitle,thumbnails,title}=snippet;
    const {viewCount}=statistics;


  return (
    <div className='w-56 p-2 m-1 shadow-lg rounded-lg'>
     <img className='rounded-lg' alt='videoCard' src={thumbnails.high.url}/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard