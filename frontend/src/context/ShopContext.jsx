import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
  let cart = {}; // initializing an empty cart object, which will be used to store the cart items
  for (let i = 0; i < 30+1; i++) {
    cart[i] = 0; // for each product, we set the initial quantity to 0
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [surfboards, setSurfboards] = useState([])
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('surfboards.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Data:', data);
        setSurfboards(data.Data); // "Data" key in surfboards.json
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  const addToCart = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCart = { ...prevCartItems };
      updatedCart[productId] += 1;
      console.log('Cart:', updatedCart); // Log updatedCart instead of cartItems
      return updatedCart;
    });
  };



  const removeFromCart = (productId) => {
    const updatedCart = {...cartItems};
    updatedCart[productId] -= 1;
    if (updatedCart[productId] < 0) {
      updatedCart[productId] = 0;
    }
    setCartItems(updatedCart);
  };

  const contextValue = { surfboards, cartItems, setCartItems, addToCart, removeFromCart}
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
