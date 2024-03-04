// render breadcrum, productdisplay, relatedsurfboards

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'

import Breadcrum from '../components/breadcrum/Breadcrum'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import RelatedSurfboards from '../components/relatedSurfboards/RelatedSurfboards'

const Surfboard = () => {

  const { products } = useContext(ShopContext)
  const { surfboardId } = useParams()

  const product = products.find((e)=> e.id === Number(surfboardId))

  return (
    <div>
      <Breadcrum/>
      <ProductDisplay/>
      <RelatedSurfboards/>
    </div>
  )
}

export default Surfboard
