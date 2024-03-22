import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenBrands, setIsOpenBrands] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleCategoriesDropdown = () => {
    setIsOpenCategories(!isOpenCategories);
  };

  const toggleBrandsDropdown = () => {
    setIsOpenBrands(!isOpenBrands);
  };

  return (
    <div className="navbar">
      <div className="navbar-items">

        <div className="nav-logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
          <p>Rentals</p>
        </div>

        <div className="nav-menu">
          <li>
            <Link to='/' style={{textDecoration: 'none'}}>Shop</Link>
            {location.pathname === '/' && <hr/>}
          </li>

          <li onClick={toggleCategoriesDropdown}>
            Categories
            {isOpenCategories && (
              <div className="dropdown-content">
                <Link to='/soft-tops'>Soft-tops</Link>
                <Link to='/retros'>Retros</Link>
                <Link to='/shortboards'>Shortboards</Link>
                <Link to='/longboards'>Longboards</Link>
              </div>
            )}
            {location.pathname.startsWith('/soft-tops') || location.pathname.startsWith('/retros') || location.pathname.startsWith('/shortboards') || location.pathname.startsWith('/longboards') ? <hr/> : null}
          </li>

          <li onClick={toggleBrandsDropdown}>
            Brands
            {isOpenBrands && (
              <div className="dropdown-content">
                <Link to='/thunderbolt'>Thunderbolt</Link>
                <Link to='/pyzel'>Pyzel</Link>
                <Link to='/channel-islands'>Channel Islands</Link>
                <Link to='/firewire'>Firewire</Link>
                <Link to='/haydenshapes'>HaydenShapes</Link>
                <Link to='/js-industries'>JS Industries</Link>
                <Link to='/sharpeye'>SharpEye</Link>
                <Link to='/torq'>Torq</Link>
                <Link to='/takayama'>Takayama</Link>
                <Link to='/album'>Album</Link>
                <Link to='/dhd'>DHD</Link>
              </div>
            )}
            {location.pathname.startsWith ('/thunderbolt') || location.pathname.startsWith('/pyzel') || location.pathname.startsWith('/channel-islands') || location.pathname.startsWith('/firewire') || location.pathname.startsWith('/lost') || location.pathname.startsWith('/haydenshapes') || location.pathname.startsWith('/js-industries') || location.pathname.startsWith('/sharpeye') || location.pathname.startsWith('/torq') || location.pathname.startsWith('/takayama') || location.pathname.startsWith('/album') || location.pathname.startsWith('/dhd') ? <hr/> : null}
          </li>
        </div>

        <div className="nav-login-cart">
          <Link className="nav-login-link" to='/login' style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faSignIn} /></Link>
          <Link className="nav-cart-link" to='/cart' style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
