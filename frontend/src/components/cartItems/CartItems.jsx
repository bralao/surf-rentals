import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
  const { surfboards, cartItems, removeFromCart } = useContext(ShopContext);
  const cartSurfboards = surfboards.filter(surfboard => cartItems[surfboard.id] > 0);   // Filter surfboards that have a quantity greater than 0 in the cartItems


  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {cartSurfboards.map((surfboard) => (
        <div key={surfboard.id}>
          {console.log(typeof cartItems[surfboard.id])}

          <div className="cartitems-format">
            <img src={surfboard.image} alt="" className="carticon-product-icon"/>
            <p>{surfboard.brand} {surfboard.model} {surfboard.height} ({surfboard.volume})</p>
            <p>${surfboard.price}</p>
            <button className="cartitems-quantity">
              {cartItems[surfboard.id]}
            </button>
            <p>${(parseFloat(surfboard.price) * cartItems[surfboard.id]).toFixed(2)}</p>
            <FontAwesomeIcon
              className="cartitems-remove-icon"
              icon={faTrash}
              onClick={() => removeFromCart(surfboard.id)}
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
