import logo from './logo.svg';
import './App.css';
import Product from './Components/Products/Product'
import Cart from './Components/Cart/Cart'
import React, { useState, useEffect } from 'react';

import { CartProvider } from 'react-use-cart'
function App() {
  return (
    
    <CartProvider>
    <div className="App">
      <div className="wrapper">
        <Product />
        <Cart />
      </div>
    </div>
    </CartProvider>
    
  );
}

export default App;
