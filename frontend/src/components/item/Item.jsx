import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({item}) => {
  return (
    <div className="item">

      <Link key={item.id} to={`/${item.category}/${item.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={item.image} alt=""/>

        <p>{item.brand} {item.model}</p>
        <p>{item.height} - {item.volume}</p>

        <div className="item-price">
          <p>from {item.price}€</p>
        </div>
      </Link>

    </div>
  )
}

export default Item
