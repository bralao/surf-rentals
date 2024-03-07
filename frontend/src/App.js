import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Shop from './pages/ShopPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Surfboard from './pages/SurfboardPage.jsx'
import Cart from './pages/CartPage.jsx'
import LoginSignup from './pages/LoginSignupPage.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/soft-tops" element={<CategoryPage category="soft-tops"/>}/>
          <Route path="/retros" element={<CategoryPage category="retros"/>}/>
          <Route path="/shortboards" element={<CategoryPage category="shortboards"/>}/>
          <Route path="/longboards" element={<CategoryPage category="longboards"/>}/>

          <Route path="/:category/:surfboardId" element={<Surfboard/>} />

          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
