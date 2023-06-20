import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_URL } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {;

    const [videos,setVideos] =useState([])
    
    useEffect(()=>{
        fetchVideos();
    },[])

    const fetchVideos =async ()=>{
        const videoRes=await fetch(YOUTUBE_URL);
        const json=await videoRes.json();
        setVideos(json.items);
    }

    if(videos.length===0){
        return;
    }

  return (
    <div className='flex flex-wrap'>
       {videos.map((video)=><Link key={video.id} to={'/watch?v='+video.id} > <VideoCard key={video.id} item={video}/> </Link>)} 
    </div>
  )
}

export default VideoContainer