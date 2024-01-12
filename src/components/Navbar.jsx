import React from 'react'
import { Link,Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='user'>
            <img id='logo' src='https://letket.com/wp-content/uploads/2021/06/logo-social.png'></img>
            <h1>Name</h1>
        </div>
        <Link to="/"><button><IoHome className='icons'/>  Home</button></Link>
        <Link to="/report-generator"><button><HiDocumentReport className='icons'/>  Report Generator</button></Link>
        <Link to="/history"><button><SlGraph className='icons'/>  History</button></Link>
        <Link to="/user-guide"><button><LuMenuSquare className='icons'/>  User Guide</button></Link>
        <div id='underline'></div>
        <Link to="/settings"><button><MdOutlineSettings className='icons'/>  Application Settings</button></Link>
        <Link to="/help"><button><FaHandsHelping className='icons'/>  Get Technical Help</button></Link>
    <Outlet></Outlet>
    </div>
  )
}

export default Navbar