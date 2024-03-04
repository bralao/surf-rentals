import React, { createContext, useState, useEffect } from 'react'


export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([])
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
        setProducts(data.Data); // Accessing the "Data" key
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

  const contextValue = { products, cart, setCart, addToCart, removeFromCart}
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
