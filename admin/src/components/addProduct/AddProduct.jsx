import React, { useState } from 'react'
import './AddProduct.css'

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    image: "",
    category: "",
    brand: "",
    model: "",
    height: "",
    width: "",
    thickness: "",
    volume: "",
    price: "",
    description: "",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  const Add_Product = async (e) => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData,
    }).then((res) => res.json()).then((data) => {responseData = data})

    if (responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((res) => res.json()).then((data) => {
        data.success?alert('Product Added Successfully'):alert('Failed to Add Product');
      });
    }
  }

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input" className="addproduct-thumnail-img">
          {image && <img src={URL.createObjectURL(image)} alt="Selected Image" />}
          {!image && <span>No image selected</span>}
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>

      <div className="addproduct-itemfield">
        <p>Category</p>
        <select className="add-product-selector" name="category" value={productDetails.category} onChange={changeHandler}>
            <option value="Soft-tops">Soft-tops</option>
            <option value="Retros">Retros</option>
            <option value="Shortboards">Shortboards</option>
            <option value="Longboards">Longboards</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label>Brand</label>
        <input type="text" name="brand" value={productDetails.brand} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <label>Model</label>
        <input type="text" name="model" value={productDetails.model} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <label>Height</label>
        <input type="text" name="height" value={productDetails.height} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <label>Width</label>
        <input type="text" name="width" value={productDetails.width} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <label>Thickness</label>
        <input type="text" name="thickness" value={productDetails.thickness} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <label>Volume</label>
        <input type="text" name="volume" value={productDetails.volume} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <label>Price</label>
        <input type="text" name="price" value={productDetails.price} onChange={changeHandler} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea name="description" value={productDetails.description} onChange={changeHandler} placeholder="Type here" />
      </div>

      <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>

    </div>
  )
}

export default AddProduct
