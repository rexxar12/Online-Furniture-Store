import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Add.css';
import { Row,Col} from 'react-bootstrap';


function AddProductForm() {
  // Add Product logic
  const [product, setProduct] = useState({ pname: '', description: '', image: null, length: 0, width: 0, height: 0, price: 0, stock: 0, category_id: 0,});
  const sellerId = sessionStorage.getItem('id');
  const [message, setMessage] = useState('');

  const [categories, setCategory] = useState([]);
  console.log(categories);
    useEffect(() => {
        axios.get('http://localhost:8080/categories')
            .then(response => setCategory(response.data))
            .catch(error => console.log(error));
    }, []);


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
    formData.append('length', product.length);
    formData.append('width', product.width);
    formData.append('height', product.height);
    formData.append('price', product.price);
    formData.append('stock', product.stock);
    formData.append('category_id', product.category_id);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ': ' + pair[1]); 
  }
    try {
      const response = await axios.post(`http://localhost:8080/api/sellers/addproducts?sellerId=${sellerId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(`Product '${response.data.pname}' has been added with ID: ${response.data.pid}`);
      window.location.replace("/seller");


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
                      <label htmlFor='length'>Length: </label>
                      <input type="number" id="length" name="length"  onChange={handleInputChange} required className="form-control form-control-lg" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div className='form-outline'>
                      <label htmlFor='width'>Width: </label>
                      <input type="number" id="width" name="width"  onChange={handleInputChange} required className="form-control form-control-lg" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div className='form-outline'>
                      <label htmlFor='height'>Height: </label>
                      <input type="number" id="height" name="height"  onChange={handleInputChange} required className="form-control form-control-lg" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div className='form-outline'>
                      <label htmlFor='price'>Price: </label>
                      <input type="number" id="price" name="price"  onChange={handleInputChange} required className="form-control form-control-lg" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div className='form-outline'>
                      <label htmlFor='stock'>Stock: </label>
                      <input type="number" id="stock" name="stock"  onChange={handleInputChange} required className="form-control form-control-lg" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div className='form-outline'>
                      <label htmlFor='category_id'>Categories: </label>
                      <select id='category_id' name="category_id" value={categories.category_id} onChange={handleInputChange} className='form-select form-select-lg'>
                      <option value="">Select a Category</option>
                      {categories.map(category => (
                          <option key={category.category_id} value={category.category_id}>{category.category}</option>
                      ))}
                      </select>

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


