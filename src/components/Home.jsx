import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import './home.css'
const Home = () => {
  return (
    <div className='container'>
        <Navbar />
        <div className='home'>
          <h1 id='welcome'>Welcome to NAME</h1>
          <img id='logoMain' src='https://letket.com/wp-content/uploads/2021/06/logo-social.png' />
          <h1 id='tagline'>Tag Line</h1>
        </div>
    </div>
  )
}

export default Home