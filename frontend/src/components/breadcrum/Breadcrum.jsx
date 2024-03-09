import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Breadcrum.css'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {

  const { surfboard } = props;



  return (
    <div className="breadcrum">
      <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
      <FontAwesomeIcon icon={faChevronRight} />
      <Link to={`/${surfboard.category}`} style={{ textDecoration: 'none' }}>{surfboard.category}</Link>
      <FontAwesomeIcon icon={faChevronRight} /> {surfboard.brand} {surfboard.model} {surfboard.height} {surfboard.volume}
    </div>
  )
}

export default Breadcrum
