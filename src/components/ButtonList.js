
import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const buttonList=['All','News','Music','Mixes','Gaming','JavaScript','Python','Movies','Paint','Foot ball','Cricket', 'Table tennies']
  return (
    <div className='flex'>
      {buttonList.map((butn,index)=>  <Button key={index} val={butn}/>)}  
    </div>
  )
}

export default ButtonList