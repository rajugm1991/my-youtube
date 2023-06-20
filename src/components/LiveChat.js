import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateMessage, generateName } from '../utils/helper';
import ChatMessage from './ChatMessage'

const LiveChat = () => {

  const [textChat,setTextChat]=useState('');

  const dispatch=useDispatch();

  const messages =useSelector(store=>store.chat.messages)

  useEffect(()=>{
    const inter=setInterval(()=>{
      dispatch(addMessage({
        name: generateName(),
        message: generateMessage(24)+ '😃 🚀 '
      }))
    },200)

    return ()=>clearInterval(inter);

  },[])

  const formSubmit=(e)=>{
    e.preventDefault();
    dispatch(addMessage({
      name:'Raju',
      message: textChat,
    }))
    setTextChat('');
  }

  return (
    <>
    <div className='w-full h-[530px] ml-1 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {messages.map((msg,id) =><ChatMessage key={id} name={msg.name} message={msg.message}/>)}
    </div>

   <form className='p-1' onSubmit={(e)=>formSubmit(e)}>
    <input type='text' placeholder='Chat' value={textChat} onChange={(e)=>setTextChat(e.target.value)} className= ' border border-gray-700 w-96 rounded-r-md'/>
    <button className='bg-green-100 p-1 m-1 rounded-lg'>Send</button>
   </form>
    </>
  )
}

export default LiveChat