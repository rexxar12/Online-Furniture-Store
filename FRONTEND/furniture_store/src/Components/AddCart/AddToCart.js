import { useState, useEffect } from "react";
import axios from "axios";

function AddToCartButton({itemName}) {
  const [isProductAdded, setIsProductAdded] = useState(false);

  const handleAddToCartClick = async () => {
    const cid = sessionStorage.getItem("id");
    const product_name = itemName;
    
    try {
      // Add the product to the cart
      await axios.post(`http://localhost:8080/api/cart/add/${cid}/${product_name}`);
      setIsProductAdded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleAddToCartClick}>
      {isProductAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}


export default AddToCartButton;
