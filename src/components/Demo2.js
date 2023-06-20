

import React, { useRef, useState } from 'react'



const Demo2 = () => {

    //let value
    let x=10;

    //state variable
    const[y,setY]=useState(1);

    const ref=useRef(0);
  return (
    <div className='m-4 p-2 border border-black h-96 w-96'>
        Use ref example
        

<div className='p-2'>
    <button className='p-2 m-2 bg-green-500' onClick={()=>{
        x=x+1;
        console.log(x)
    }}>Increase X</button>

    <span>X value : {x}</span>

</div>

<div className='p-2'>
    <button className='p-2 m-2 bg-green-500' onClick={()=>{
        setY(y+1);
        console.log(x);
    }}>Increase Y</button>

    <span>Y value : {y}</span>

</div>

<div className='p-2'>
    <button className='p-2 m-2 bg-green-500' onClick={()=>{
       ref.current=ref.current+1;
        console.log(x);
    }}>Increase ref</button>

    <span>Ref value : {ref.current}</span>

</div>

    </div>
  )
}

export default Demo2