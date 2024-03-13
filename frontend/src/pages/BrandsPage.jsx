import React, { useState, useEffect } from 'react';
import './styles/BrandsPage.css';
import Item from '../components/item/Item';

const BrandsPage = (props) => {
  const [surfboards, setSurfboards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/surfboards.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch surfboard data`);
        }
        const data = await response.json();
        const brandItems = data.filter(item => item.brand === props.brand);
        console.log(brandItems)
        setSurfboards(brandItems);
      } catch (error) {
        console.error(`Error fetching surfboard data:`, error);
      }
    };

    fetchData();
  }, [props.brand]);

  return (
    <div className="shop-brand">
      <h1 style={{ textTransform: 'capitalize' }}>{props.brand}</h1>
      <div className="shopbrand-items">
        {surfboards.map((item) => (
          <div className="shopbrand-item" key={item.id}>
            <Item item={item} pageType="brand" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
