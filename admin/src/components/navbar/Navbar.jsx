import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo"/>
      <p>Admin Panel</p>
    </div>
  )
}

export default Navbar
