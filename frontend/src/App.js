import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Shop from './pages/ShopPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import BrandsPage from './pages/BrandsPage.jsx'
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

          <Route path="/thunderbolt" element={<BrandsPage brand="Thunderbolt" />} />
          <Route path="/pyzel" element={<BrandsPage brand="Pyzel" />} />
          <Route path="/channel-islands" element={<BrandsPage brand="Channel Islands" />} />
          <Route path="/firewire" element={<BrandsPage brand="Firewire" />} />
          <Route path="/haydenshapes" element={<BrandsPage brand="HaydenShapes" />} />
          <Route path="/js-industries" element={<BrandsPage brand="JS Industries" />} />
          <Route path="/sharpeye" element={<BrandsPage brand="Sharpeye" />} />
          <Route path="/torq" element={<BrandsPage brand="Torq" />} />
          <Route path="/takayama" element={<BrandsPage brand="Takayama" />} />
          <Route path="/album" element={<BrandsPage brand="Album" />} />
          <Route path="/dhd" element={<BrandsPage brand="DHD" />} />

          <Route path="/:category/:surfboardId" element={<Surfboard />} />
          <Route path="/:brand/:surfboardId" element={<Surfboard />} />


          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
