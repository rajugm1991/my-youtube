import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    < div className='flex pt-16'>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </div>
    
  )
}

export default Body