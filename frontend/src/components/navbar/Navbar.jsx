import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <ul>
        <li><Link to='/' style={{textDecoration: 'none'}}>Shop</Link></li>

      </ul>

    </div>
  )
}

export default Navbar
