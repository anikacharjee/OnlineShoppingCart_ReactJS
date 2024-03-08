// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './Product';
import CartPage from './CartPage';

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.name === product.name
    );

    if (existingProductIndex !== -1) {
      if (product.remove) {
        updatedCart.splice(existingProductIndex, 1);
      } else {
        updatedCart[existingProductIndex].quantity += 1;
      }
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    const newTotalAmount = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCart(updatedCart);
    setTotalAmount(newTotalAmount);
  };

  const resetCart = () => {
    setCart([]);
    setTotalAmount(0);
  };

  return (
    <Router>
      <div>
        <h1>React Shopping Cart</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addToCart={addToCart}
                cart={cart}
                totalAmount={totalAmount}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} totalAmount={totalAmount} resetCart={resetCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = ({ addToCart }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Product name="Product 1" price={10.99} addToCart={addToCart} />
      <Product name="Product 2" price={20.49} addToCart={addToCart} />
      <Product name="Product 3" price={5.99} addToCart={addToCart} />
    </div>
  );
};

export default App;
