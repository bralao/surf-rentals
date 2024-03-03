import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SURF-RENTALS</p>
      </div>

      <div className="nav-menu">
        <li><Link to='/' style={{textDecoration: 'none'}}>Shop</Link></li>
        <li><Link to='/shopcategory' style={{textDecoration: 'none'}}>Soft Tops</Link></li>
        <li>Retros</li>
        <li>Shortboards</li>
        <li>Longboards</li>
      </div>

      <div className="nav-login-cart">
        <Link className="nav-login-link" to='/login' style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faSignIn} /></Link>
        <Link className="nav-cart-link" to='/cart' style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>

    </div>
  )
}

export default Navbar
