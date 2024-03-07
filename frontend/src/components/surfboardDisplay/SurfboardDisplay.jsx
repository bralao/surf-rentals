import React from 'react'
import './SurfboardDisplay.css'

const SurfboardDisplay = (props) => {

  const {surfboard} = props;

  return (
    <div className="productdisplay">

      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img src={surfboard.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h5>Brand: {surfboard.brand}</h5>
        <h1>{surfboard.brand} {surfboard.model} {surfboard.height} ({surfboard.volume})</h1>
        <h3>from €{surfboard.price}</h3>
        <p>{surfboard.description}</p>
        <h3>{surfboard.height} x {surfboard.width} x {surfboard.thickness}</h3>
      </div>
    </div>
  )
}

export default SurfboardDisplay
