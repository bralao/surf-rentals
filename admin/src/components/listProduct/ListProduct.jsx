import React, { useState, useEffect } from 'react'
import './ListProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`http://localhost:4000/removeproduct/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
    });
    await fetchInfo();
  }

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Category</p>
        <p>Dimensions</p>
        <p>Volume</p>
        <p>Price</p>
        <p>Description</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
                <hr/>

        {allProducts.map((product, index) => {
          return (
            <div key={index} className="listproduct-format-main">
              {/* <img src={product.image} alt="" className="listproduct-product-icon"/> */}
              <p>{product.brand} - {product.model}</p>
              <p>{product.category}</p>
              <p>{product.height} x {product.width} x {product.thickness}</p>
              <p>{product.volume}</p>
              <p>{product.price}€</p>
              <p>{product.description}</p>
              <button onClick={() => {remove_product(product.id)}} className="listproduct-remove-icon">
                <FontAwesomeIcon name="faTrash" icon={faTrash} />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct
