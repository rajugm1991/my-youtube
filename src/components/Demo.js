import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {


    const [num,setNum]=useState(0);

    const [isDark,SetIsDark]=useState(true);

    //costly operation
   // const prime=findPrime(num);

    //use mem0

    const memoVal=useMemo(()=>findPrime(num),[num])

  return (
    <div className={"m-4 p-2 border border-black w-96 h-96 rounded-r-lg"+ (isDark && " bg-gray-900 text-white")}>
      <h1 className='font-bold'>Demo on Use memo</h1>

      <button className='p-2 m-2 rounded-md bg-green-600' onClick={()=>SetIsDark(!isDark)}> Toggle</button>

    <div>
        <input type='numer' value={num} onChange={(e)=>setNum(e.target.value)} className='p-2 m-4 border border-gray-500 rounded-2xl'/>
    </div>
    <span> Prime value {memoVal} </span>
    </div>
  )
}

export default Demo