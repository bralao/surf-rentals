import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
  const { surfboards, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
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

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>$ {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>#FFE - Free For Everyone</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>

          <button
            onClick={() => alert("You've been AWESOMELY checked out.\nYou can pick up your board at your front door at the end of the day\n;)")}
            >Checkout</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code'/>
            <button
              onClick={() => alert("That promo code will be valid within 1 DAY.\nTry it then ;)")}
            >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
