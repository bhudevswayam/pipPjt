import React from 'react'
import '../App.css'
import './guide.css'
import Navbar from './Navbar'

const Userguide = () => {
  return (
    <div className='container'>
        <Navbar />
        <div className='userGuide'>
          <h1>Platform INFO</h1>
          <h1>Naming Of Files and Folders</h1>
        </div>
    </div>
  )
}

export default Userguide