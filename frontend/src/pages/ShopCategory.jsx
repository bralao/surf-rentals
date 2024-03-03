// show all products, depending on category
// navbar has surfboard dropdown that has the categories
// when a category is clicked, it will show all products in that category
// categories: soft-top, retro, shortboard, longboard

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import './ShopCategory.css'
import Item from '../components/item/Item'

const ShopCategory = (props) => {

  const { products } = useContext(ShopContext)

  return (
    <div className="shop-category">
      <h1>{props.category}</h1>
      <div className="shopcategory-products">
        {products.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} image={item.image} brand={item.brand} model={item.model} height={item.height} volume={item.volume} price={item.price}/>
            } else {
              return null
            }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
