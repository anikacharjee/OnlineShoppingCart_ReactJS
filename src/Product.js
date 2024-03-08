// Product.js

import React, { useState } from 'react';

const Product = ({ name, price, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    addToCart({ name, price });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      addToCart({ name, price, remove: true });
    }
  };

  const imageName = name.toLowerCase().replace(/\s/g, '') + '.png';

  return (
    <div className="product-box">
      <img src={`${process.env.PUBLIC_URL}/${imageName}`} alt={name} className="product-image"
       style={{ width: '200px', height: '200px' }}
      />
      <div>
        <h3>{name}</h3>
        {price && <p>${price.toFixed(2)}</p>}
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: '0 5px'}}>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Product;
