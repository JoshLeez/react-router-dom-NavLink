import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/status">Status</NavLink>
    </nav>
  )
}

export default Navbar