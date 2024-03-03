import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([
    { id: 1, image:"./components/assets/torqlongboard8", category:"Soft-top", brand:"Torq", model:"Longboard - Soft Deck", height:`8'0"`, width:`22 3/8`, thickness:`3 1/4`, volume:"66L", price:"20,00", description:"The overall size makes these the easiest to paddle, catch waves and stand up on. Improving surfers can develop wide turns and nose riding thanks to the genuine longboard template and rocker."},
    { id: 2, image:"./components/assets/torqlongboard9", category:"Soft-top", brand:"Torq", model:"Longboard - Soft Deck", height:`9'0"`, width:`23 1/8`, thickness:`3 1/2`, volume:"79L", price:"20,00", description:"The overall size makes these the easiest to paddle, catch waves and stand up on. Improving surfers can develop wide turns and nose riding thanks to the genuine longboard template and rocker."},
    { id: 3, image:"./components/assets/dominator60", category:"Shortboard", brand:"FireWire", model:"Dominator II", height:`6'4"`, width:`21"`, thickness:`2 3/4`, volume:"40.9L", price:"40,00", description:"The rails are slightly more refined and performance oriented. The concave is the same under the front foot but splits into a subtle, double-barrel and V out the tail in the last 5”. I normally look for a round tail to provide smoothness in transition from rail to rail and during turns, but the squash tail is proving to not only have that quality as well, but also a bit more release in the turns."},
    { id: 4, image:"./components/assets/hyptokrypto66", category:"Shortboard", brand:"HaydenShapes", model:"Hypto Krypto", height:`6'6"`, width:`21 1/2`, thickness:`3"`, volume:"45.52L", price:"40,00", description:"Currently one of the most in demand and best selling surfboards globally, The Hypto Krypto is a balance of tradition and modern performance. Suited to the elite level surfer to the everyday surfer, it is often referred to as the 'one board quiver' for its versatility across all types of surf conditions - from small 1-3 ft beach breaks, to barrels of up to 8ft."},
    { id: 5, image:"./components/assets/inferno62", category:"Shortboard", model:"Inferno 72", height:`6'2"`, width:`20 1/4`, thickness:`2 3/4`, volume:"33.4L", price:"50,00", description:"The Inferno 72 is a tuned up version of the Disco Inferno, a tried and tested QS favorite. We have added more rocker in the entry and exit for more hold through turns and drive. It's going to surf its best in small to medium waves and just like the Disco Inferno the Inferno 72 is a performance surfboard that will handle just about all conditions thrown at it and maintain its spark."},
    { id: 6, image:"./components/assets/mid610", category:"Retro", brand:"Channel Islands", model:"Mid", height:`6'10"`, width:`20 7/8`, thickness:`2 11/16`, volume:"42.3L", price:"40,00", description:"The CI Mid is a modern classic design resulting from a fun collaboration with Devon Howard, a southern California surfer that has spent the past two decades riding and refining egg-inspired designs that are in a category of boards many refer to as midlengths."},
    { id: 7, image:"./components/assets/thunderbolt92", category:"Longboard", brand:"Thunderbolt", model:"Red Waikiki", height:`9'2"`, width:`22 1/2`, thickness:`2 3/4`, volume:"69.6L", price:"50,00", description:"True to tradition it has very round fifty fifty rails all the way through the nose concave. This board really represents everything that Waikiki represents, honestly."},
    { id: 8, image:"./components/assets/phantom61", category:"Shortboard", brand:"Pyzel", model:"Phantom", height:`6'1"`, width:`20 1/4`, thickness:`2 5/8`, volume:"34.4L", price:"40,00", description:"When we first brought out the Ghost we had no idea that it's unique design would come to be embraced by so many people in so many different types of waves. However, the one bit of feedback we kept hearing was that it was that it works best in waves shoulder-high and up, so we looked at making a step-down board that would bring that same feel to the head-high and under days that make up most of our daily surf sessions."},
    { id: 9, image:"./components/assets/twinsman510", category:"Retro", brand:"Album", model:"Twinsman", height:`5'10"`, width:`20"`, thickness:`2 3/4`, volume:"34.4L", price:"50,00", description:"Approachable for any style of surfing. A board that you can really push on rail or just enjoy the easy down the line speed."}
  ])
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const contextValue = { products, setProducts, cart, setCart, addToCart, removeFromCart}
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
