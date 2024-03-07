import React, { createContext, useState, useEffect } from 'react'


export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const [surfboards, setSurfboards] = useState([])
  const [cart, setCart] = useState([])

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



  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const contextValue = { surfboards, cart, setCart, addToCart, removeFromCart}
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
