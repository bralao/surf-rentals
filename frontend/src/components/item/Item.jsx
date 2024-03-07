import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <div className="item">

      <Link key={props.id} to={`/${props.category}/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt=""/>

        <p>{props.brand} {props.model}</p>
        <p>{props.height} - {props.volume}</p>

        <div className="item-price">
          <p>from {props.price}€</p>
        </div>
      </Link>

    </div>
  )
}

export default Item
