import React, { useState, useEffect } from 'react'
import './styles/ShopCategory.css'
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
      <div className="shopcategory-products">
        {surfboards.map((item) => (
          <div key={item.id}>
            <Item
              id={item.id}
              image={item.image}
              category={item.category}
              brand={item.brand}
              model={item.model}
              height={item.height}
              volume={item.volume}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
