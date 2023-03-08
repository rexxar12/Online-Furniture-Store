import React from "react";
import { useLocation } from 'react-router-dom';

function Products() {
  const { state } = useLocation();
  const products = state.products || [];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={`data:image/png;base64,${product.productImage}`} alt={product.pname} />
          <p>{product.pname}</p>
          <p>{product.description}</p>
          <p>{product.seller.sname}</p>
          <p>{product.category.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
