import React, { useState } from 'react';
import axios from 'axios';
import './Add.css';
import { Row,Col} from 'react-bootstrap';
import { height } from '@mui/system';

function AddProductForm() {
  //Add Product logic
  const sid=sessionStorage.getItem('id');
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
      const err=setMessage('Failed to add product. Please try again later.');
      alert(err);
      console.error(error);
    }
  };

  return (
    <div className='gradient-custom'>
      <div className="container vh-100 me-5 mb-auto">
        <div className="row justify-content-center align-items-center vh-100 ">
          <div className="col-12 col-lg-12 col-xl-7">
            <div className="col-12 col-lg-12 col-xl-12">
              <div className="card shadow-2-strong card-registration" style={{ width: "80%", height: "100%", borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4 pb-2 pb-md-0 mb-md-3">
                    <h3>Add Product</h3>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                  <Row>
                  <Col>
                  <div className='form-outline'>
                    <label htmlFor="pname">Product Name:</label>
                  </div>
                    <input type="text" id="pname" name="pname" value={product.pname} onChange={handleInputChange} required className="form-control form-control-lg" />
                  </Col>
                  </Row>
                  <Row className='my-3'>
                  <Col>
                    <div className='form-outline'>
                    <label htmlFor="description">Product Description:</label>
                    <textarea id="description" name="description" value={product.description} onChange={handleInputChange} required className="form-control form-control-lg"></textarea>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <div className='form-outline'>
                    <label htmlFor="image" className=''>Product Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} required className="form-control"/>
                    </div>
                  </Col>
                  </Row>
                  <Row className='my-3'>
                  <div className='d-flex align-items-center justify-content-center mb-4'>
                  <button type="submit" className='mx-2 btn btn-outline-danger Button'>Add Product</button>
                  </div>
                  </Row>
                  </form>
                  {message && <p>{message}</p>}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductForm



{/* <form onSubmit={handleSubmit}>
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
      </form> */}