import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <div className="item">

      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />

        <p>{props.brand} {props.model} {props.height} ({props.volume})</p>

        <div className="item-price">
          <p>{props.price}</p>
        </div>
      </Link>

    </div>
  )
}

export default Item
