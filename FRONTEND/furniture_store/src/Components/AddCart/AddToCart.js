import { useState, useEffect } from "react";
import axios from "axios";

function AddToCartButton({itemName}) {
  const [isProductAdded, setIsProductAdded] = useState(false);

  const handleAddToCartClick = async () => {
    const cid = sessionStorage.getItem("id");
    const product_name = itemName;
    console.log(product_name);
    
    try {
      // Check if the product exists in the cart
      const response = await axios.get(`http://localhost:8080/api/cart/${cid}/${product_name}`);
      if (response.status === 200) {
        setIsProductAdded(true); // Product exists in the cart
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Product doesn't exist in the cart, add it
        await axios.post(`http://localhost:8080/api/cart/add/${cid}/${product_name}`);
        setIsProductAdded(true);
      }
    }
  };

  useEffect(() => {
    // Check if the product exists in the cart on mount
    handleAddToCartClick();
  }, []);

  return (
<button onClick={handleAddToCartClick} disabled={isProductAdded}>
      {isProductAdded ? "Added" : "Add to Cart"}
    </button>
  );
}

export default AddToCartButton;
