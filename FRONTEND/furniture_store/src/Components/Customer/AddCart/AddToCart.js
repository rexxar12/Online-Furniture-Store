import { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function AddToCartButton({itemName,woodType}) {
  const [isProductAdded, setIsProductAdded] = useState(false);
  
  


  const handleAddToCartClick = async () => {
    const cid = sessionStorage.getItem("id");
    const product_name = itemName;
    const wood= woodType;
    
    try {
      // Add the product to the cart
      await axios.post(`http://localhost:8080/api/cart/add/${cid}/${product_name}/${wood}`);
      setIsProductAdded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleAddToCartClick} className="btn bg-transparent addtocart">
      {isProductAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}


export default AddToCartButton;
