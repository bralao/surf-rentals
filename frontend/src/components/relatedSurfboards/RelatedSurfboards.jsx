import React from 'react'
import './RelatedSurfboards.css'

const RelatedSurfboards = ({allSurfboards, chosenSurfboard}) => {

  const relatedSurfboards = allSurfboards.filter(
    (surfboard) => surfboard.category === chosenSurfboard.category && surfboard.id !== chosenSurfboard.id
  );



  return (
    <div className="related-surfboards">
      <h2>Related Surfboards</h2>
      <div className="surfboards-items">
        {relatedSurfboards.map((surfboard) => (
          <div className="surfboard-item" key={surfboard.id}>
            <img src={surfboard.image} alt={surfboard.model} />
            <h3>{surfboard.model}</h3>
            <p>{surfboard.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedSurfboards
