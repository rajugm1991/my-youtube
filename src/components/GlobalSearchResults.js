import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { SEARCH_API } from '../utils/constants';
import { hideSearch, updateSearchVal } from '../utils/globalSearchSlice';
import SearchResultsList from './SearchResultsList';

const GlobalSearchResults = () => {

    const [pramas]=useSearchParams();
    
    const [searchRes,setSearchRes]=useState([]);

    useEffect(()=>{
       
      fetchSearchResults();

    },[pramas.get('search_query')])


  const fetchSearchResults=async()=>{

     const searchResult=await fetch(SEARCH_API+pramas.get('search_query'));
     const jsonData=await searchResult.json();
     console.log(jsonData);
     setSearchRes(jsonData.items);
  }

  return (
    <div>
    {searchRes.length>0&&<div> 
      {searchRes.map(res=> <SearchResultsList key={res.id.videoId} items={res}/>)} 
    </div>}
    </div>
  )
}

export default GlobalSearchResults