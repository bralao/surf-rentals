// render breadcrum, productdisplay, relatedsurfboards

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'

import Breadcrum from '../components/breadcrum/Breadcrum'
import SurfboardDisplay from '../components/surfboardDisplay/SurfboardDisplay'
import RelatedSurfboards from '../components/relatedSurfboards/RelatedSurfboards'

const Surfboard = () => {

  const { surfboards } = useContext(ShopContext)
  const { surfboardId } = useParams()

  const surfboard = surfboards.find((e)=> e.id === Number(surfboardId))

  console.log('Surfboard:', surfboard);

  return (
    <div>
      <Breadcrum surfboard={surfboard}/>
      <SurfboardDisplay surfboard={surfboard}/>
      <RelatedSurfboards/>
    </div>
  )
}

export default Surfboard
