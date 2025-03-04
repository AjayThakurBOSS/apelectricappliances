import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import Footer from '../components/Footer'

const HomePage = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children || <Home/>}
        <Footer/>
    </div>
  )
}

export default HomePage