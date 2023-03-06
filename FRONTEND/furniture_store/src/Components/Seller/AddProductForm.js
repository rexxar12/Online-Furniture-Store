import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    seller: {
      id: 0,
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/products/create", product)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={product.description} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={product.image} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Seller ID:
          <input type="number" name="seller.id" value={product.seller.id} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductForm;