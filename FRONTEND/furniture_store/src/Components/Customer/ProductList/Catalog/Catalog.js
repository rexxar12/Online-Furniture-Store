import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Products from './Products'
import Navbar from '../../Navigation/Navigation';

function Catalog() {
  const [formType, setFormType] = useState('');

  const handleSelect = (event) => {
    setFormType(event.target.value);
  };
  console.log(formType);

  return (
    <div>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col xs={8} md={2}>
          <div className="mt-5 ms-2">
            <label htmlFor="formType" className="form-label">
              Select Category:
            </label>
            <select
              id="formType"
              className="form-select"
              value={formType}
              onChange={handleSelect}
            >
              <option value="">-- Category --</option>
              <option value="Sofa">Sofa</option>
              <option value="Chair">Chair</option>
              <option value="Bed">Bed</option>
              <option value="Bookshelf">Bookshelf</option>
              <option value="Table">Table</option>
              <option value="Coffee Table">Coffee Table</option>
              <option value="Dining Table">Dining Table</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>
        </Col>
        <Col xs={6} md={8} className="mt-5 ms-5">
        {formType === "Sofa" && <Products category={formType}/>}
        {formType === "Chair" && <Products category={formType}/>}
        {formType === "Bed" && <Products category={formType}/>}
        {formType === "Bookshelf" && <Products category={formType}/>}
        {formType === "Table" && <Products category={formType}/>}
        {formType === "Coffee Table" && <Products category={formType}/>}
        {formType === "Dining Table" && <Products category={formType}/>}
        {formType === "Outdoor" && <Products category={formType}/>}
          
        </Col>
      </Row>
    </div>
  );
}

export default Catalog;
