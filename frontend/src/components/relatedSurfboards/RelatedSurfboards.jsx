import React from 'react'
import './RelatedSurfboards.css'
import {Link} from 'react-router-dom'

const RelatedSurfboards = ({allSurfboards, chosenSurfboard}) => {

  const relatedSurfboards = allSurfboards.filter(
    (surfboard) => surfboard.category === chosenSurfboard.category && surfboard.id !== chosenSurfboard.id
  );



  return (
    <div className="related-surfboards">
      <h3>Related Surfboards</h3>
      <div className="items">
        {relatedSurfboards.slice(0,4).map((surfboard) => (

          <Link key={surfboard.id} to={`/${surfboard.category}/${surfboard.id}`}>
            <div onClick={window.scrollTo(0, 0)} className="item">
              <img src={surfboard.image} alt={surfboard.model} />
              <p>{surfboard.brand} {surfboard.model}</p>
              <p>{surfboard.height} - {surfboard.volume}</p>

              <div className="item-price">
                <p>from {surfboard.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedSurfboards
