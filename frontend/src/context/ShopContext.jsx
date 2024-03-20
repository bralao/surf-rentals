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
  const [surfboards, setSurfboards] = useState([]);
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
        setSurfboards(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const addToCart = (surfboardId) => {
    const updatedCartItems = { ...cartItems };     // Clone cartItems object to avoid mutation
    updatedCartItems[surfboardId] += 1;     // Increment the quantity of the surfboard in the cart by 1
    setCartItems(updatedCartItems);     // Update cartItems state
    console.log(updatedCartItems)
  };

  const removeFromCart = (surfboardId) => {
    const updatedCartItems = { ...cartItems };
    if (updatedCartItems.hasOwnProperty(surfboardId)) {
      if (updatedCartItems[surfboardId] > 0) {
        updatedCartItems[surfboardId] -= 1;
      }
    }
    setCartItems(updatedCartItems);
    console.log(updatedCartItems);
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems ) {
      if(cartItems[item] > 0) {
        let itemInfo = surfboards.find((surfboard) => surfboard.id === Number(item));
        totalAmount += (parseFloat(itemInfo.price) * cartItems[item]);
      }
    }
    return totalAmount;
  }

  const contextValue = { surfboards, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount}
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
