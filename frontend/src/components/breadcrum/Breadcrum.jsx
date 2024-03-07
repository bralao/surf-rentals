import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Breadcrum.css'

const Breadcrum = (props) => {

  const { surfboard } = props;

  return (
    <div className="breadcrum">
      Shop <FontAwesomeIcon icon={faChevronRight} /> {surfboard.category} <FontAwesomeIcon icon={faChevronRight} /> {surfboard.brand} {surfboard.model} {surfboard.height} {surfboard.volume}
    </div>
  )
}

export default Breadcrum
