import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './reduxStore/actions';
import React, { useState } from 'react';
import axios from 'axios';

const Seller = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      const hist=window.history.state;
      window.history.replaceState(hist,"","/");
      dispatch(logout());
      navigate('/');
    };
    const sid=sessionStorage.getItem('id');

    //Add Product logic
    const [product, setProduct] = useState({ pname: '', description: '', image: null });
    const [sellerId, setSellerId] = useState(sid);
    const [message, setMessage] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setProduct({ ...product, image: file });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('pname', product.pname);
      formData.append('description', product.description);
      formData.append('image', product.image);
      try {
        const response = await axios.post(`http://localhost:8080/api/sellers/products?sellerId=${sellerId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setMessage(`Product '${response.data.pname}' has been added with ID: ${response.data.pid}`);
      } catch (error) {
        setMessage('Failed to add product. Please try again later.');
        console.error(error);
      }
    };
  
  
  return (
    <div>
      <h2>Seller Component</h2>
      <p>Seller homepage</p>
      <button onClick={handleLogout}>Logout</button>
      <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pname">Product Name:</label>
          <input type="text" id="pname" name="pname" value={product.pname} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="description">Product Description:</label>
          <textarea id="description" name="description" value={product.description} onChange={handleInputChange} required></textarea>
        </div>
        <div>
          <label htmlFor="image">Product Image:</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}

export default Seller;