import React, { useState } from 'react';
import axios from 'axios';

function AddToCartButton(props) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setLoading(true);

    axios.post(`http://localhost:8080/cart/${props.productName}`)
      .then(response => {
        console.log(response.data);
        setLoading(false);
        setAdded(true);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <button onClick={handleClick} disabled={loading || added}>
      {loading ? 'Adding to cart...' : added ? 'Added' : 'Add to cart'}
    </button>
  );
}

export default AddToCartButton;
