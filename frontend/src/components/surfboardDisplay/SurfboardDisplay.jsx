import React from 'react'
import './SurfboardDisplay.css'
import BookNow from '../booking/Booking';


const SurfboardDisplay = (props) => {

  const {surfboard} = props;

  return (
    <div className="productdisplay">

      <div className="productdisplay-left">
        <img src={surfboard.image} alt="" />
      </div>

      <div className="productdisplay-right">
        <h5>Brand: {surfboard.brand}</h5>
        <h1>{surfboard.brand} {surfboard.model} {surfboard.height} ({surfboard.volume})</h1>
        <h3>from €{surfboard.price}</h3>
        <p>{surfboard.description}</p>
        <h3>Dimensions: {surfboard.height} x {surfboard.width} x {surfboard.thickness}</h3>
        <h3>Volume: {surfboard.volume} </h3>

        <BookNow />

        
      </div>
    </div>
  )
}

export default SurfboardDisplay
