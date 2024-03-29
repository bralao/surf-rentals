import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item, pageType, category, brand }) => {

  const getItemLink = () => {
    if (pageType === "category") {
      return `/${category}/${item.id}`;
    } else if (pageType === "brand") {
      return `/${brand.toLowerCase()}/${item.id}`;
    }
    return "/";
  };

  return (
    <div className="item">
      <Link to={getItemLink()} key={item.id}>
        <img onClick={() => window.scrollTo(0, 0)} src={item.image} alt="" />
        <p>{item.brand} {item.model}</p>
        <p>{item.height} - {item.volume}</p>
        <div className="item-price">
          <p>from {item.price}€</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
