import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Shop from './pages/Shop.jsx'
import ShopCategory from './pages/ShopCategory.jsx'
import Surfboard from './pages/Surfboard.jsx'
import Cart from './pages/Cart.jsx'
import LoginSignup from './pages/LoginSignup.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/shopcategory" element={<ShopCategory />} />
          {/* add more routes for other categories*/}
          <Route path="/surfboard" element={<Surfboard />}>
            <Route path=':surfboardId' element={<Surfboard />} />
          </Route>

          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
