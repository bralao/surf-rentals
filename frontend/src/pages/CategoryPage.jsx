import React, { useState, useEffect } from 'react'
import './styles/CategoryPage.css'
import Item from '../components/item/Item'


const CategoryPage = (props) => {
  const [surfboards, setSurfboards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${props.category}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${props.category} data`);
        }
        const data = await response.json();
        setSurfboards(data.Data || []);
      } catch (error) {
        console.error(`Error fetching ${props.category} data:`, error);
      }
    };

    fetchData();
  }, [props.category]);

  return (
    <div className="shop-category">
      <h1 style={{ textTransform: 'capitalize' }}>{props.category}</h1>
      <div className="shopcategory-items">
        {surfboards.map((item) => (
          <div className="shopcategory-item" key={item.id}>
            <Item
              item={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
