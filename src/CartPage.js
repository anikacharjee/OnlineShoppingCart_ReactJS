// CartPage.js

import React from 'react';
import './CartPage.css';

const CartPage = ({ cart, totalAmount, resetCart }) => {
  return (
      <div>
        <h2>Product Details</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)} (Quantity: {item.quantity})
              <span> | Total: ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <p id="ta">Total Amount: ${totalAmount.toFixed(2)}</p>
      <button onClick={resetCart}>Reset Cart</button>
      </div>
  );
};

export default CartPage;
