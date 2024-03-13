// CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import './styles/CategoryPage.css';
import Item from '../components/item/Item';

const CategoryPage = (props) => {
  const [surfboards, setSurfboards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/surfboards.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch surfboard data`);
        }
        const data = await response.json();
        const categoryItems = data.filter(item => item.category === props.category)
        setSurfboards(categoryItems);
      } catch (error) {
        console.error(`Error fetching surfboard data:`, error);
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
            <Item item={item} category={item.category} pageType={"category"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
