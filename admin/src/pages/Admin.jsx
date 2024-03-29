import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        add product route
        list product route
      </Routes>
    </div>
  )
}

export default Admin
