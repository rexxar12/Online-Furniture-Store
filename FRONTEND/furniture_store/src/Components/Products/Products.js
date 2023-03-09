import React from 'react';

import './Product.css';

function Products() {


  return (
    <header>
      <div class="container ">
      <div class="container hdr">
        <img src={require("./Images/1.jpg")} className="jumbo-image img-fluid" alt="Responsive image"/>
        


      </div>
      </div>
    </header>
  );
}

export default Products;



// <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <img src={`data:image/png;base64,${product.productImage}`} alt={product.pname} />
//           <p>{product.pname}</p>
//           <p>{product.description}</p>
//           <p>{product.seller.sname}</p>
//           <p>{product.category.category}</p>
//         </div>
//       ))}
//     </div>