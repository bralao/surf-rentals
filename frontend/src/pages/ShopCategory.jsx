// show all products, depending on category
// navbar has surfboard dropdown that has the categories
// when a category is clicked, it will show all products in that category
// categories: soft-top, retro, shortboard, longboard

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item'

const ShopCategory = (props) => {

  const { products } = useContext(ShopContext)

  return (
    <div>

      <div className="shopcategory-products">
        {products.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            } else {
              return null
            }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
