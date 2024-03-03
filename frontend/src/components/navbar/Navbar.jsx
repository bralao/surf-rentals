import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SURF-RENTALS</p>
      </div>

      <div className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("soft-tops")}}><Link to='/soft-tops' style={{textDecoration: 'none'}}>Soft-tops</Link>{menu==="soft-tops"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("retros")}}><Link to='/retros' style={{textDecoration: 'none'}}>Retros</Link>{menu==="retros"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shortboards")}}><Link to='/shortboards' style={{textDecoration: 'none'}}>Shortboards</Link>{menu==="shortboards"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("longboards")}}><Link to='/longboards' style={{textDecoration: 'none'}}>Longboards</Link>{menu==="longboards"?<hr/>:<></>}</li>
      </div>

      <div className="nav-login-cart">
        <Link className="nav-login-link" to='/login' style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faSignIn} /></Link>
        <Link className="nav-cart-link" to='/cart' style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>

    </div>
  )
}

export default Navbar
